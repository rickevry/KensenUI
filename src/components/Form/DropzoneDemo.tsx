/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../../../typings/jquery/jquery.d.ts" />
/// <reference path="../../../typings/react-dropzone/react-dropzone.d.ts" />

import * as React from 'react';
import FormUtils from "./FormUtils";
import * as Dropzone from 'react-dropzone'

export default class DropzoneDemo extends React.Component<any, any> {

    constructor(props, context) {
        super(props, context);
    }

     getDivStyle() {
         return {
             width: "100%",
             float: "left"
         }
     }

     getDropStyle() {
         return {
             width: "100%",
             height: 70,
             borderWidth: 2,
             borderColor: '#666',
             borderStyle: 'dashed',
             borderRadius: 5
         }
     }

     getInnerDivStyle() {
         return {
             textAlign: "center",
             paddingTop: 25
         }
     }

    onDrop(files:any) {
      console.log('Received files: ', files);
      this.uploadAudio2(files[0]);
    }

    uploadAudio( blob:any ) {
        var reader = new FileReader();
        reader.onload = function(event:any){
            var fd = {};
            fd["fname"] = "test.wav";
            fd["data"] = event.target.result;
            jQuery.ajax({
                type: 'POST',
                url: "/api/files/Post",
                data: fd,
                dataType: 'text'
            }).done(function(data) {
                console.log(data);
            });
        };
      reader.readAsDataURL(blob);
    }

    uploadAudio2(file:any) {
        var self = this;
        var fd = new FormData();
        fd.append(file.name, file);
        //fd.append('rick1', "abc");
        //fd.append('rick2', 12322);
         
        jQuery.ajax({
            headers: { 'Accept': 'application/json' },
            type: 'POST',
            url: "/api/files/Post",
            data: fd,
            cache: false,
            contentType: false,
            processData: false
        }).done(function (data) {
            console.log("Upload done...");
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                console.log(item);
                self.props.onUpload && self.props.onUpload(item);
            }
        });

        self.props.onDrop && self.props.onDrop(file);

    }

    handleDeleteFile(file:any, e:any, b:any) {
        console.log("handleDeleteFile");
        console.log(file);
        console.log(e);
        console.log(b);
        this.props.onDeleteFile && this.props.onDeleteFile(file);
        e.preventDefault();
        e.stopPropagation();
    }

    refClick(e:any) {
        // e.preventDefault();
        e.stopPropagation();
        return true;
    }

    render() {
        var self = this;
        var files = "";
        var renderFileName = function (file) {
            //if (file.Id) {
            //    return <span style={{paddingLeft:10}}><a target="_blank" href={"/api/Files/"+file.Id} key={file.Id}>{file.Name}</a><i onClick={self.handleDeleteFile.bind(self, file)} class="fa fa-trash-o"></i></span>
            //} else {
            // return <span style={{paddingLeft:10}} key={file.Id}>{file.Name}<i className="fa fa-trash-o" onClick={self.handleDeleteFile.bind(self, file)}></i></span>
            return <span style={{paddingLeft:10}} key={file.Id}><a onClick={self.refClick} target="_blank" href={"/api/Files/Get/"+file.Id} key={file.Id}>{file.Name}</a><i className="fa fa-trash-o" onClick={self.handleDeleteFile.bind(self, file)}></i></span>
        //}
        };
        if (this.props.files) {
            files = this.props.files.map(renderFileName);
        }
      return (
          <div style={this.getDivStyle()}>
            <Dropzone style={this.getDropStyle()} onDrop={(e) => {this.onDrop(e)}}>
              <div style={this.getInnerDivStyle()}>Drop files you want to attach here, or click to upload.<br/>
                {files}
                </div>
            </Dropzone>
          </div>
      );
    }
 }


