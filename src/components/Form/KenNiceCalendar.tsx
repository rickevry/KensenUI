/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../../../typings/moment-range/moment-range.d.ts" />
/// <reference path="../../../typings/moment/moment.d.ts" />

import * as React from 'react';

// import 'moment-range'
// import cs from 'classnames'

import * as moment from 'moment';
import 'moment-range';

function Cell({ value, classes }) {
  const _classes = `${classes} cell`
  return <div className={_classes}>{value}</div>
}


class CustomRange
{
  public startDate: Date;
  public endDate: Date;
  constructor(start: number, end: number)
  {
    this.startDate = new Date(start);
    this.endDate = new Date(end);
  }
  
  by(timeUnit: string, lambda: any)
  {
    let outputArray = [];
    switch(timeUnit){
      case "years":
        for(var y=this.startDate.getFullYear() ; y<=this.endDate.getFullYear() ; y++){
          let tempDate = moment(this.startDate);
          tempDate.year(y);
          lambda(tempDate);
        }
        break;
       case "days":
        let tempDate = moment(this.startDate);
        let endDate = moment(this.endDate);
        while(tempDate <= endDate){
          lambda(tempDate);
          tempDate.add("days", 1);
        }
        break;
      default:
        throw new Error(`Unsupported timeUnit: ${timeUnit}!`);
    }
    return outputArray;
  }
}
let MomentRange = (start: number, end: number) => {
  return new CustomRange(start, end);
};


var hasOwn = {}.hasOwnProperty;

function ViewHeader({ prev, next, titleAction, data }) {
  return (
    <div className="navigation-wrapper">
      <span className="icon" onClick={prev}>&lt;</span>
      <span className="navigation-title" onClick={titleAction} >{data}</span>
      <span className="icon" onClick={next}>&gt;</span>
    </div>
  )
}

class DaysView extends React.Component<any, any> {
  static propTypes = {
    date: React.PropTypes.object.isRequired,
    minDate: React.PropTypes.any,
    maxDate: React.PropTypes.any,
    setDate: React.PropTypes.func,
    nextView: React.PropTypes.func
  }

  cellClick = e => {
    let cell = e.target
    let date = parseInt(cell.innerHTML, 10)
    let newDate = this.props.date ? this.props.date.clone() : moment()

    if (isNaN(date)) return

    if (cell.className.indexOf('prev') > -1 ) {
      newDate.subtract(1, 'months')
    } else if (cell.className.indexOf('next') > -1) {
      newDate.add(1, 'months')
    }

    newDate.date(date)
    this.props.setDate(newDate, true)
  }

  getDays() {
    let now = this.props.date ? this.props.date : moment()
    let start = now.clone().startOf('month').weekday(0)
    let end = now.clone().endOf('month').weekday(6)
    let minDate = this.props.minDate
    let maxDate = this.props.maxDate
    let month = now.month()
    let today = moment()
    let currDay = now.date()
    let year = now.year()
    let days = []

    MomentRange(start, end)
      .by('days', day => {
        days.push({
          label: day.format('D'),
          prev: (day.month() < month && !(day.year() > year)) || day.year() < year ,
          next: day.month() > month || day.year() > year,
          disabled: day.isBefore(minDate, 'day') || day.isAfter(maxDate, 'day'),
          curr: day.date() === currDay && day.month() === month,
          today: day.date() === today.date() && day.month() === today.month() && day.year() === today.year()
        })
      }) 
    return days
  }

  getDaysTitles() {
    let now = moment()
    return [0,1,2,3,4,5,6].map(i => {
      let weekday = now.weekday(i).format('dd')
      return { val: weekday, label: weekday }
    })
  }

  next = () => {
    let nextDate = this.props.date.clone().add(1, 'months')
    if (this.props.maxDate && nextDate.isAfter(this.props.maxDate, 'day')) {
      nextDate = this.props.maxDate
    }
    this.props.setDate(nextDate)
  }

  prev = () => {
    let prevDate = this.props.date.clone().subtract(1, 'months')
    if (this.props.minDate && prevDate.isBefore(this.props.minDate, 'day')) {
      prevDate = this.props.minDate
    }
    this.props.setDate(prevDate)
  }


keyDown() {
  
}
  render() {
    let titles = this.getDaysTitles().map((item, i) => {
      return <Cell classes="day title" key={i} value={item.label} />
    })
    let _class

    let days = this.getDays().map((item, i) => {
      _class = Util.cs({
        day: true,
        next: item.next,
        prev: item.prev,
        disabled: item.disabled,
        current: item.curr,
        today: item.today
      })
      return <Cell classes={_class} key={i} value={item.label} />
    })

    let currentDate = this.props.date ? this.props.date.format('MMMM') : moment().format('MMMM')

    return (
      <div className="view days-view" onKeyDown={this.keyDown}>
        <ViewHeader
          data={currentDate}
          next={this.next}
          prev={this.prev}
          titleAction={this.props.nextView} />
        <div className="days-title">{titles}</div>
        <div className="days" onClick={this.cellClick}>{days}</div>
      </div>
    )
  }
}


class MonthsView extends React.Component<any, any> {
  static propTypes = {
    date: React.PropTypes.object.isRequired,
    minDate: React.PropTypes.any,
    maxDate: React.PropTypes.any
  }

  cellClick = e => {
    const month = e.target.innerHTML
    if (this.checkIfMonthDisabled(month)) return

    const date = this.props.date.clone().month(month)
    this.props.prevView(date)
  }

  checkIfMonthDisabled(month) {
    const now = this.props.date
    return now.clone().month(month).endOf('month').isBefore(this.props.minDate, 'day') ||
      now.clone().month(month).startOf('month').isAfter(this.props.maxDate, 'day')
  }

  getMonth() {
    const month = this.props.date.month()
    return moment.monthsShort().map((item, i) => {
      return {
        label: item,
        disabled: this.checkIfMonthDisabled(i),
        curr: i === month
      }
    })
  }

  next = () => {
    let nextDate = this.props.date.clone().add(1, 'years')
    if (this.props.maxDate && nextDate.isAfter(this.props.maxDate, 'day')) {
      nextDate = this.props.maxDate
    }
    this.props.setDate(nextDate)
  }

  prev = () => {
    let prevDate = this.props.date.clone().subtract(1, 'years')
    if (this.props.minDate && prevDate.isBefore(this.props.minDate, 'day')) {
      prevDate = this.props.minDate
    }
    this.props.setDate(prevDate)
  }

  render() {
    const currentDate = this.props.date.format('YYYY')
    let months = this.getMonth().map((item, i) => {
      let _class = Util.cs({
        month: true,
        disabled: item.disabled,
        current: item.curr
      })
      return <Cell classes={_class} key={i} value={item.label} />
    })

    return (
      <div className="months-view" >
        <ViewHeader data={currentDate} next={this.next} prev={this.prev} titleAction={this.props.nextView} />
        <div className="months" onClick={this.cellClick}>{months}</div>
      </div>
    )
  }
}


const _keyDownViewHelper = [
  {
    prev: false,
    next: true,
    exit: true,
    unit: 'day',
    upDown: 7
  },
  {
    prev: true,
    next: true,
    unit: 'months',
    upDown: 3
  },
  {
    prev: true,
    next: false,
    unit: 'years',
    upDown: 3
  }
]

const KEYS = {
  backspace: 8,
  enter: 13,
  esc: 27,
  left: 37,
  up: 38,
  right: 39,
  down: 40
}

class Util {
  
  public static cs(a?:any,b?:any,c?:any,d?:any,e?:any ) {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(Util.cs.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

    public static toDate(date) {
    return date instanceof Date ? date : new Date(date)
  }
  
  public static keyDownActions(code, comp) {
    const _viewHelper:any = _keyDownViewHelper[comp.state.currentView]
    const unit = _viewHelper.unit

    switch (code) {
      case KEYS.left:
        comp.setDate(comp.state.date.subtract(1, unit))
        break
      case KEYS.right:
        comp.setDate(comp.state.date.add(1, unit))
        break
      case KEYS.up:
        comp.setDate(comp.state.date.subtract(_viewHelper.upDown, unit))
        break
      case KEYS.down:
        comp.setDate(comp.state.date.add(_viewHelper.upDown, unit))
        break
      case KEYS.enter:
        if (_viewHelper.prev) {
          comp.prevView(comp.state.date)
        }
        if (_viewHelper.exit) {
          comp.setState({ isVisible: false })
        }
        break
      case KEYS.esc:
        comp.setState({ isVisible: false })
        break
      default:
        break
    }
  }
  
}

class YearsView extends React.Component<any, any> {
  static propTypes = {
    date: React.PropTypes.object,
    minDate: React.PropTypes.any,
    maxDate: React.PropTypes.any,
    changeView: React.PropTypes.func
  }
  state = { years: [] }

  componentWillMount() {
    this.getYears()
  }

  componentWillReceiveProps() {
    this.getYears()
  }

  cellClick = e => {
    const year = parseInt(e.target.innerHTML, 10)
    const date = this.props.date.clone().year(year)
    if (this.checkIfYearDisabled(date)) return
    this.props.prevView(date)
  }

  checkIfYearDisabled (year) {
    return year.clone().endOf('year').isBefore(this.props.minDate, 'day') ||
      year.clone().startOf('year').isAfter(this.props.maxDate, 'day')
  }

  getYears() {
    let now = this.props.date
    let start = now.clone().subtract(5, 'year')
    let end = now.clone().add(6, 'year')
    let currYear = now.year()
    let items = []
    let inRange = this.rangeCheck(currYear)

    const { years } = this.state

    if (years.length > 0 && inRange) {
      return years
    }


    //moment()
      MomentRange(start, end)
      .by('years', year => {
        items.push({
          label: year.format('YYYY'),
          disabled: this.checkIfYearDisabled(year),
          curr: currYear === year.year()
        })
      })

    this.setState({ years: items })

    return items
  }

  next = () => {
    let nextDate = this.props.date.clone().add(10, 'years')
    if (this.props.maxDate && nextDate.isAfter(this.props.maxDate, 'day')) {
      nextDate = this.props.maxDate
    }
    this.props.setDate(nextDate)
  }

  prev = () => {
    let prevDate = this.props.date.clone().subtract(10, 'years')
    if (this.props.minDate && prevDate.isBefore(this.props.minDate, 'day')) {
      prevDate = this.props.minDate
    }
    this.props.setDate(prevDate)
  }

  rangeCheck = currYear => {
    const { years } = this.state
    if (years.length == 0) {
      return false
    }
    return years[0].label <= currYear && years[years.length-1].label >= currYear
  }

  render() {
    const years = this.state.years
    const currYear = this.props.date.year()
    let _class

    let yearsCells = years.map((item, i) => {
      _class = Util.cs({
        year: true,
        disabled: item.disabled,
        current: item.label == currYear
      })
      return <Cell value={item.label} classes={_class} key={i} />
    })
    const currentDate = [years[0].label, years[years.length-1].label].join('-')
    return (
      <div className="years-view">
        <ViewHeader 
          data={currentDate} 
          next={this.next} 
          prev={this.prev} 
          titleAction={null}
          />
        <div className="years" onClick={this.cellClick}>{yearsCells}</div>
      </div>
    )
  }
}



export default class Calendar extends React.Component<any, any> {
  constructor(props, context) {
    super(props, context)
    const date = props.date ? moment(Util.toDate(props.date)) : null
    const minDate = props.minDate ? moment(Util.toDate(props.minDate)) : null
    const maxDate = props.maxDate ? moment(Util.toDate(props.maxDate)) : null
    const format = props.format || 'MM-DD-YYYY'
    const minView = parseInt(props.minView, 10) || 0
    const computableFormat = props.computableFormat || 'MM-DD-YYYY'
    const strictDateParsing = props.strictDateParsing || false
    const parsingFormat = props.parsingFormat || format

    this.state = {
      date,
      minDate,
      maxDate,
      format,
      computableFormat,
      inputValue: date ? date.format(format) : "",
      views: ['days', 'months', 'years'],
      minView,
      currentView: minView || 0,
      isVisible: false,
      strictDateParsing,
      parsingFormat
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.documentClick)
  }

  componentWillReceiveProps(nextProps) {

    this.setState({
      date: nextProps.date ? moment(Util.toDate(nextProps.date)) : this.state.date,
      inputValue: nextProps.date
        ? moment(Util.toDate(nextProps.date)).format(this.state.format) : null,
        isVisible: nextProps.disabled === true
    })
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.documentClick)
  }

  changeDate = e => { //eslint-disable-line
    this.setState({ inputValue: e.target.value })
  }

  checkIfDateDisabled(date) {
    return date && this.state.minDate && date.isBefore(this.state.minDate, 'day')
      || date && this.state.maxDate && date.isAfter(this.state.maxDate, 'day')
  }

  documentClick = () => {
    if (!this.state.isCalendar) {
      this.setVisibility(false)
    }
    this.setState({ isCalendar: false })
  }
  
  sendReduxAction(date:string) {
      this.props.actions.fieldChanged(this.props.inputId, date)
  }

  inputBlur = e => {
    let newDate = null
    let computableDate = null
    const date = this.state.inputValue
    const format = this.state.format
    const parsingFormat = this.state.parsingFormat

    if (date) {
      // format, with strict parsing true, so we catch bad dates
      newDate = moment(date, parsingFormat, true)
      // if the new date didn't match our format, see if the native
      // js date can parse it
      if (!newDate.isValid() && !this.props.strictDateParsing) {
        let d = new Date(date)
        // if native js cannot parse, just make a new date
        if (isNaN(d.getTime())) {
          d = new Date()
        }
        newDate = moment(d)
      }

      computableDate = newDate.format(this.state.computableFormat)
    }

    this.setState({
      date: newDate,
      inputValue: newDate ? newDate.format(format) : null
    })

    this.sendReduxAction(this.state.inputValue)

    if (this.props.onBlur) {
      this.props.onBlur(e, computableDate)
    }
  }

  inputFocus = e => {
    if (this.props.openOnInputFocus) {
      this.toggleClick()
    }

    if (this.props.onFocus) {
      this.props.onFocus(e)
    }
  }

  keyDown = e => {
    Util.keyDownActions.call(this, e.keyCode)
  }

  nextView = () => {
    if (this.checkIfDateDisabled(this.state.date)) return
    this.setState({ currentView: ++this.state.currentView })
  }

  prevView = date => {
    let newDate = date
    if (this.state.minDate && date.isBefore(this.state.minDate, 'day')) {
      newDate = this.state.minDate.clone()
    }

    if (this.state.maxDate && date.isAfter(this.state.maxDate, 'day')) {
      newDate = this.state.maxDate.clone()
    }

    if (this.state.currentView === this.state.minView) {
      this.setState({
        date: newDate,
        inputValue: date.format(this.state.format),
        isVisible: false
      })
      
    } else {
      this.setState({
        date,
        currentView: --this.state.currentView
      })
    }
  }

  setDate = (date, isDayView) => {
    if (this.checkIfDateDisabled(date)) return

    this.setState({
      date,
      inputValue: date.format(this.state.format),
      isVisible: this.props.closeOnSelect
        && isDayView ? !this.state.isVisible : this.state.isVisible
    })
    
    if (isDayView)
      this.sendReduxAction(date.format(this.state.format))
  }

  setVisibility(val?:any) {
    const value = val !== undefined ? val : !this.state.isVisible
    const eventMethod = value ? 'addEventListener' : 'removeEventListener'

    document[eventMethod]('keydown', this.keyDown)

    if (this.state.isVisible !== value && !this.props.disabled) {
      this.setState({ isVisible: value })
    }
  }

  calendarClick = () => {
    this.setState({ isCalendar: true })
  }

  todayClick = () => {
    const today = moment().startOf('day')

    if (this.checkIfDateDisabled(today)) return

    this.setState({
      date: today,
      inputValue: today.format(this.state.format),
      currentView: this.state.minView
    })

  }

  toggleClick = () => {
    this.setState({ isCalendar: true })
    this.setVisibility()
  }

  render() {
    // its ok for this.state.date to be null, but we should never
    // pass null for the date into the calendar pop up, as we want
    // it to just start on todays date if there is no date set
    let calendarDate = this.state.date || moment()
    let view

    switch (this.state.currentView) {
      case 0:
        view = (<DaysView
          date={calendarDate}
          nextView={this.nextView}
          maxDate={this.state.maxDate}
          minDate={this.state.minDate}
          setDate={this.setDate}
        />)
        break
      case 1:
        view = (<MonthsView
          date={calendarDate}
          nextView={this.nextView}
          maxDate={this.state.maxDate}
          minDate={this.state.minDate}
          prevView={this.prevView}
          setDate={this.setDate}
        />)
        break
      case 2:
        view = (<YearsView
          date={calendarDate}
          maxDate={this.state.maxDate}
          minDate={this.state.minDate}
          prevView={this.prevView}
          setDate={this.setDate}
        />)
        break
      default:
        view = (<DaysView
          date={calendarDate}
          nextView={this.nextView}
          maxDate={this.state.maxDate}
          minDate={this.state.minDate}
          setDate={this.setDate}
        />)
    }

    let todayText = this.props.todayText || (moment.locale() === 'de' ? 'Heute' : 'Today')
    let calendarClass = Util.cs({
      'input-calendar-wrapper': true,
      'icon-hidden': this.props.hideIcon
    })

    let calendar = !this.state.isVisible ? '' :
      <div className={calendarClass} onClick={this.calendarClick}>
        {view}
        <span
          className={
            `today-btn${this.checkIfDateDisabled(moment().startOf('day')) ? ' disabled' : ''}`
          }
          onClick={this.todayClick}>
          {todayText}
        </span>
      </div>

    let readOnly = false

    if (this.props.hideTouchKeyboard) {
      // do not break server side rendering:
      try {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
          .test(navigator.userAgent)) {
          readOnly = true
        }
      } catch (e) {
        console.warn(e) //eslint-disable-line
      }
    }

    let calendarIcon
    if (this.props.customIcon == null) {
      // Do not show calendar icon if hideIcon is true
      calendarIcon = this.props.hideIcon || this.props.disabled ? '' :
        <span className="icon-wrapper calendar-icon" onClick={this.toggleClick} >
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path d="M5 6h2v2h-2zM8 6h2v2h-2zM11 6h2v2h-2zM2 12h2v2h-2zM5 12h2v2h-2zM8 12h2v2h-2zM5 9h2v2h-2zM8 9h2v2h-2zM11 9h2v2h-2zM2 9h2v2h-2zM13 0v1h-2v-1h-7v1h-2v-1h-2v16h15v-16h-2zM14 15h-13v-11h13v11z"
            />
          </svg>
        </span>
    } else {
      calendarIcon = (
        <span
          className={Util.cs('icon-wrapper', 'calendar-icon', this.props.customIcon)}
          onClick={this.toggleClick}
        />
      )
    }

    const inputClass = this.props.inputFieldClass || 'input-calendar-field'

    return (
      <div className="input-calendar">
        <input
          name={this.props.inputName}
          className={inputClass}
          id={this.props.inputFieldId}
          onBlur={this.inputBlur}
          onChange={this.changeDate}
          onFocus={this.inputFocus}
          placeholder={this.props.placeholder}
          readOnly={readOnly}
          disabled={this.props.disabled}
          type="text"
          value={this.state.inputValue ? this.state.inputValue : ""}
        />
        {calendarIcon}
        {calendar}
      </div>
    )
  }
}

/*

Calendar.propTypes = {
  closeOnSelect: React.PropTypes.bool,
  computableFormat: React.PropTypes.string,
  strictDateParsing: React.PropTypes.bool,
  parsingFormat: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.arrayOf(React.PropTypes.string)
  ]),
  date: React.PropTypes.any,
  minDate: React.PropTypes.any,
  maxDate: React.PropTypes.any,
  format: React.PropTypes.string,
  inputName: React.PropTypes.string,
  inputFieldId: React.PropTypes.string,
  inputFieldClass: React.PropTypes.string,
  minView: React.PropTypes.number,
  onBlur: React.PropTypes.func,
  onChange: React.PropTypes.func,
  onFocus: React.PropTypes.func,
  openOnInputFocus: React.PropTypes.bool,
  placeholder: React.PropTypes.string,
  hideTouchKeyboard: React.PropTypes.bool,
  hideIcon: React.PropTypes.bool,
  customIcon: React.PropTypes.string,
  todayText: React.PropTypes.string,
  disabled: React.PropTypes.bool
}

*/