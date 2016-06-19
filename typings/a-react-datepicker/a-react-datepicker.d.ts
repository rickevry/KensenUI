// Type definitions for a-react-datepicker
// Project: https://github.com/Hacker0x01/react-datepicker
// Definitions by: Rickard Nilsson <http://rickardnilsson.com>
// Definitions: https://github.com/RickEvry/DefinitelyTyped

///<reference path='../react/react.d.ts' />

declare namespace AReactDatepicker {
    import React = __React;
    interface CalendarProps {
        className?: string;
        dateFormat?: string;
        dateFormatCalendar?: string;
        disabled?: boolean;
        endDate?: Object;
        excludeDates?: any;
        filterDate?: Function;
        id?: string;
        includeDates?: any;
        isClearable?: boolean;
        locale?: string;
        maxDate?: Object;
        minDate?: Object;
        name?: string;
        onBlur?: Function;
        onChange?: Function;
        onFocus?: Function;
        placeholderText?: string;
        popoverAttachment?: string;
        popoverTargetAttachment?: string;
        popoverTargetOffset?: string;
        readOnly?: boolean;
        renderCalendarTo?: any;
        required?: boolean;
        selected?: Object;
        showYearDropdown?: boolean;
        startDate?: Object;
        tabIndex?: number;
        tetherConstraints?: any;
        title?: string;
        todayButton?: string;
        style?: any;
    }

    export class Calendar extends React.Component<CalendarProps, {}> {
    }

}

declare module "a-react-datepicker" {
    const Calendar: typeof AReactDatepicker.Calendar;
    export = Calendar;
}

