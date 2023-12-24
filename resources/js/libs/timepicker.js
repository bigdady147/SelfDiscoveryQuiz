/**
 *
 888                   888    d8b
 888                   888    Y8P
 888                   888
 .d8888b  8888b.  888  .d88b.  88888b.  888888 888 88888b.d88b.
 d88P"        "88b 888 d8P  Y8b 888 "88b 888    888 888 "888 "88b
 888      .d888888 888 88888888 888  888 888    888 888  888  888
 Y88b.    888  888 888 Y8b.     888  888 Y88b.  888 888  888  888
 "Y8888P "Y888888 888  "Y8888  888  888  "Y888 888 888  888  888

 *
 * @name: calentim - the date/time range picker
 * @description: An inline/popup date/time range picker
 * @version: 1.3.6
 * @author: Taha PAKSU <tpaksu@gmail.com>
 *
 * changelog
 * =========
 *
 * v1.0.0
 * ------
 * - released first version
 *
 * v1.0.1
 * ------
 * - fixed minute step overflow error on last step range
 * - fixed ineffective initial value on `startEmpty: true` setting
 * - fixed parameterless hideDropdown call bug in firefox
 * - fixed multiple instance closing issues
 * - added option to remove time pickers (`showTimePickers`)
 * - added infinite scroll on timepickers
 *
 * v1.0.2
 * ------
 * - fixed target element confusion when different target option is specified
 * - added `showCalendars` option to disable date selection (only time picker)
 *
 * v1.1.0
 * ------
 * - fixed an issue about time pickers setting the wrong value on first click
 * - fixed autoCloseOnSelect on singleDate version / mobile views
 * - changed code to make clicking on disabled days select start/end date
 * - added some transition delays to make it smoother
 * - added keyboard navigation (`enableKeyboard` option)
 *      up: previous week
 *      down: next week
 *      left: previous day
 *      right: next day
 *      space: select day
 *      pageup: previous month
 *      pagedown next month
 *      shift + pageup: previous year
 *      shift + pagedown: next year
 * - added easy year switch buttons on year list
 * - fixed startEmpty cell selected classes
 * - added destroy method and some extra tests
 * - fix custom target element reading in fetchInputs method
 *
 * v1.1.1
 * ------
 * - fixed the month change problem which is caused by a reset when validating dates.
 *
 * v1.1.2
 * ------
 * - fixed the problem about showing the initial month when the selected date is in a different month.
 * - added inline view support on mobile devices
 * - fixed startEmpty behaviour when clicking the cancel button on mobile
 *
 * v1.1.3
 * ------
 * - added showButtons property for not automatically updating the input, default false
 * - added tests for showButtons property
 * - added time changes to onbeforechange and onafterchange event
 * - fixed range selection on instances with startEmpty: true defined
 * - fixed hovering bug after month change when first date is selected
 *
 * v1.1.4
 * ------
 * - fixed button disabled state with startEmpty and showButtons are both active
 * - reapplied deleted locale setting
 * - innerWidth function was called on javascript object, not jQuery object, fixed.
 * - buttons now don't submit forms.
 *
 * v1.1.5
 * ------
 * - configuration objects attached to prototype converted to independent objects
 * - startEmpty property clears input on initialization
 * - added jshint javascript linter to gruntfile
 * - some optimizations
 * - moved event bubbling in one method
 * - added "left" "right" display options ("showOn" option, default "bottom")
 * - added auto positioning enable/disable flag ("autoAlign" option, default "true")
 * - added position recalculation on window scroll and resize events
 * - fixed hour:minute scrolling issue
 * - fixed locale error on month selector
 * - added adjustment for font-size in month selector page
 *
 * v1.1.6
 * ------
 * - Repeating day issue caused by daylight saving time activation fixed.
 *
 * v1.1.7
 * ------
 * - fixed header display bug on startEmpty
 * - converted moment instances to unix timestamps on reDrawCells method
 * - added first and last hover classes (border radius effect)
 * - removed autoprefixer and added postcss plugin for browser compatible CSS
 * - fixed visibility issues
 * - Added `calentim-not-in-month` class for the days that don't belong to that month
 * - Replaced moment's `.startOf("day")` to `middleOfDay()` extension function to minimize DST change bugs.
 * - switched from grunt-jasmine to karma test runner
 *
 * v1.1.8
 * ------
 * - added next day selection demo to linked single time pickers example
 * - fixed ESC key hiding inline calendars bug.
 * - added backup and restore time pickers method to  time values intact on month changes
 *
 * v1.1.9
 * ------
 * - fixed display bug on header (start week of day showed day number instead of name)
 * - improved linked single date picker example
 *
 * v1.2.0
 * ------
 * - updated jQuery library in demos and readme to v3.1.2
 * - updated getDimensions method to more paint and memory friendly version
 * - added setStart, setEnd, setMinDate, setMaxDate and setDisplayDate methods
 * - added istanbul test code coverage tools
 * - added start and end date validation regarding minimum and maximum allowed dates
 * - added `reverseTimepickerArrows` option to reverse the actions of time picker arrows
 *
 * v1.2.1
 * ------
 * - changed prev and next hour/minute displays regarding to reverseTimePickerArrows setting.
 * - fixed 12h display bug on showing dropdown in 24h format
 * - fixed dropdown positioning on inner scrolling container other than window
 *
 * v1.2.2
 * ------
 * - fixed calendar title locale bug
 * - fixed startOnMonday dismissing the 1st day row when its on sunday
 *
 * v1.2.3
 * ------
 * - added predefined events to hideDropdown and showDropdown to prevent var undefined exception.
 * - updated example about linked date pickers
 * - implemented ontimechange event
 * - added month name format on monthselector
 * - added week numbers on calendars
 *
 * v1.2.4
 * ------
 * - Added right side range list panel settings
 * - Updated documentation
 * - added smart positioning on top/bottom dropdowns
 * - added selected range indicators
 * - massive performance upgrade
 * - added arrowOn parameter which moves the arrow to the desired position.
 * - improved positioning on viewport edges
 * - added center/center display option
 *
 * v1.2.5
 * ------
 * - added onaftermonthchange and onafteryearchange to month and year selectors
 * - added calentim-disabled-range class on mindate/maxdate effective days
 * - added day clones instead of real ones as attributes of events
 * - fixed mobile button bug on month change
 * - fixed autocloseonselect not updating input on mobile
 * - fixed time up/down buttons
 *
 * v1.2.6
 * ------
 * - documentation fixes
 * - removed firing onafterselect running after a time change
 * - separated time picker update code to let start or end date update their designated inputs separately
 * - added null controls to variables passed to events by cloning
 * - updated linked single date pickers example on documentation
 * - added onBeforeInit, onBeforeDestroy and ondestroy event
 * - fixed mobile modal resizing height issue
 *
 * v1.2.7
 * ------
 * - added timepicker time limiting feature
 * - updated documentation
 *
 * v1.2.8
 * ------
 * - added fix for IOS devices hover on first click feature/bug
 *
 * v1.2.9
 * ------
 * - fix for timepicker up/down buttons activating wrong instances
 *
 * v1.2.10
 * -------
 * - fix for timepicker hour up down buttons working with minuteSteps variable
 *
 * v1.2.11
 * -------
 * - fix range selection ignores time
 *
 * v1.2.12
 * -------
 * - new feature: hiding arrows before minDate and after maxDate
 * - fix for timepicker update on range selections
 * - css fix for Edge browser
 *
 * v1.2.13
 * -------
 * - some styling fixes about height change on inline calendar month switches
 *
 * v1.3.0
 * -------
 * - added hotel style booking feature for ranges
 * - added disableOnlyStart and disableOnlyEnd parameters
 * - selections not in month should have not-in-month class
 * - added minSelectedDays parameter to prevent users to select less than defined days
 * - added enableSwipe configuration parameter to enable/disable calendar swipe left/right to switch months, default enabled
 * - added configurations for icons in the plugin
 * - added validateClick event, to prevent cell clicks before anything occurs
 * - added hideOutOfRange property for hiding the arrows
 * - added auto close after range selection
 * - added DOBCalendar option to act as a date-of-birth selector
 * - added onCancel event to verify cancellation
 * - fix for wrong week start regarding to locale on Safari
 *
 * v1.3.1
 * ------
 * - more localization on calendar numerals
 * - added keyboard support for time pickers
 * - added RTL support
 * - fixed isDisabled method resetting the time to middle of the day
 *
 * v1.3.2
 * ------
 * - fixed hotel mode selection clear bug on dropdown open
 * - fixed IE9 & Edge right side range display
 * - added examples for disableOnlyStart and disableOnlyEnd options
 * - added examples for hotel style booking feature
 *
 * v1.3.3
 * ------
 * - added "!default" for scss variables to enable overrides
 * - fixed range continuity check preventing date selection in single date mode
 * - added tests to package
 * - added date checks and needed conversions on initialization
 * - fixed single date selection on ranges
 *
 * v1.3.4
 * ------
 * - prevented timepicker to change the day when overflow occurs
 * - fixed missing onCancel event handler
 * - changed checkMobile method to only use media queries, not browser agent strings
 * - added setting for mobile/desktop view threshold (mobileBreakpoint)
 * - added calendar close feature on mobile backdrop click
 * - fixed swipe month switch ignoring hideOutOfRange setting
 * - fixed tests differing between mobile and desktop view
 *
 * v1.3.5
 * ------
 * - added support for multiple disabled time ranges
 * - removed time change modifying dates
 * - added example for multiple disabled time ranges
 *
 * v1.3.6
 * ------
 * - fix for timepickers only view resetting to today's date on dropdown show event
 *
 * Usage:
 * ------
 * $(".selector").calentim({options});
 *
 */
;
(function ($, window, document, undefined) {
    /**
     *  The main calentim class
     *  @class calentim
     */
    var calentim = function (elem, options) {
        this.elem = elem;
        this.$elem = $(elem);
        this.options = options;
        this.metadata = this.$elem.data("plugin-options");
    };
    /**
     * Prototype of calentim plugin
     * @prototype calentim
     */
    calentim.prototype = {
        /////////////////////////////////////////////////////////////////////
        // public properties that can be set through plugin initialization //
        /////////////////////////////////////////////////////////////////////
        public: function () {
            return {
                startDate: moment(),            // the selected start date, initially today
                endDate: moment(),              // the selected end date, initially today
                format: "L LT",                 // the default format for showing in input, default short date format of locale
                dateSeparator: " - ",           // if not used as a single date picker, this will be the seperator
                calendarCount: 2,               // how many calendars will be shown in the plugin screen
                mobileBreakpoint: 760,          // width in pixels to switch to mobile layout on initialization
                isHotelBooking: false,          // hotel booking style ranges
                inline: false,                  // display as an inline input replacement
                minDate: null,                  // minimum selectable date, default null (no minimum)
                maxDate: null,                  // maximum selectable date, default null (no maximum)
                showHeader: true,               // visibility of the part which displays the selected start and end dates
                showFooter: true,               // visibility of the part which contains user defined ranges
                rangeOrientation: "horizontal", // show ranges horizontally below the calendars or vertically on the side
                verticalRangeWidth: 180,        // range panel width when rangeOrientation is set to vertical
                showTimePickers: true,          // visibility of the time pickers
                showCalendars: true,            // visibility of the calendars
                showButtons: false,             // visibility of apply and cancel buttons
                hourFormat: 12,                 // 12 or 24 hour format
                minuteSteps: 1,                 // minute increase steps
                startOnMonday: false,           // if you want to start the calendars on monday, set this to true
                container: "body",              // the container of the dropdowns
                oneCalendarWidth: 230,          // the width of one calendar, if two calendars are shown, the input width will be 2 * this setting.
                enableKeyboard: true,           // enabling keyboard navigation
                showOn: "bottom",               // dropdown placement position relative to input element ( "top", "left", "right", "bottom", "center")
                arrowOn: "left",                // arrow position ("left" "right" "center" for showOn "bottom" or "top", and vice versa)
                autoAlign: true,                // automatically reposition the picker when window resize or scroll or dropdown show
                locale: moment.locale(),        // moment locale setting, different inputs: https://momentjs.com/docs/#/i18n/changing-locale/ , available locales: https://momentjs.com/ (bottom of the page)
                singleDate: false,              // if you want a single date picker, set this to true
                target: null,                   // the element to update after selection, defaults to the element that is instantiated on
                autoCloseOnSelect: false,       // after date range selection, dropdown/modal automatically closes itself
                startEmpty: false,              // initializing with no dates selected at beginning
                ranges: [{                      // default range objects array, one range is defined like : {title(string), startDate(moment object), endDate(moment object) }
                    title: "Today",
                    startDate: moment().startOf("day"),
                    endDate: moment().endOf("day")
                }, {
                    title: "3 Days",
                    startDate: moment().startOf("day"),
                    endDate: moment().add(2, "days").endOf("day")
                }, {
                    title: "5 Days",
                    startDate: moment().startOf("day"),
                    endDate: moment().add(4, "days").endOf("day")
                }, {
                    title: "1 Week",
                    startDate: moment().startOf("day"),
                    endDate: moment().add(6, "days").endOf("day")
                }, {
                    title: "Till Next Week",
                    startDate: moment().startOf("day"),
                    endDate: moment().endOf("week").endOf("day") // if you use Monday as week start, you should use "isoweek" instead of "week"
                }, {
                    title: "Till Next Month",
                    startDate: moment().startOf("day"),
                    endDate: moment().endOf("month").endOf("day")
                }],
                rangeLabel: "Ranges: ",         // the title of defined ranges
                cancelLabel: "Cancel",          // the title of cancel button
                applyLabel: "Apply",            // the title of apply button
                nextMonthIcon: "<i class='fa fa-arrow-right'></i>",
                prevMonthIcon: "<i class='fa fa-arrow-left'></i>",
                rangeIcon: "<i class='fa fa-retweet'></i>",
                headerSeparator: "<i class='fa fa-chevron-right'></i>",
                onbeforeselect: function () {
                    return true;
                },               // event which is triggered before selecting the end date ( a range selection is completed )
                onCancel: function () {
                    return true;
                },                       // event which is triggered when user clicks the cancel button
                onafterselect: function () {
                },                             // event which is triggered after selecting the end date ( the input value changed )
                onbeforeshow: function () {
                },                              // event which is triggered before showing the dropdown
                onbeforehide: function () {
                },                              // event which is triggered before hiding the dropdown
                onaftershow: function () {
                },                               // event which is triggered after showing the dropdown
                onafterhide: function () {
                },                               // event which is triggered after hiding the dropdown
                onfirstselect: function () {
                },                             // event which is triggered after selecting the first date of ranges
                onrangeselect: function () {
                },                             // event which is triggered after selecting a range from the defined range links
                onbeforemonthchange: function () {
                    return true;
                },          // event which fires before changing the first calendar month of multiple calendars, or the month of a single calendar
                onaftermonthchange: function () {
                },                        // event which fires after changing the first calendar month of multiple calendars, or the month of a single calendar
                onafteryearchange: function () {
                },                         // event which fires after changing the first calendar year of multiple calendars, or the year of a single calendar
                ondraw: function () {
                },                                    // event which is fired after each calendar redraw
                onBeforeInit: function () {
                },                              // event which is fired before initialization and after configuration
                onBeforeDestroy: function () {
                    return true;
                },              // event which is fired before destruction
                ondestroy: function () {
                },                                 // event which is fired after complete destruction
                validateClick: function () {
                    return true;
                },                 // event which is fired on cell click, returning false will prevent selection
                oninit: function () {
                },                                    // event which is fired after successfull initialization
                ontimechange: function () {
                },                              // event which is fired after time change
                disableDays: function () {      // filter method to make days disabled by returning true with conditions. false will enable the day
                    return false;
                },
                limitTimeForDay: function () {
                    return {start: {hour: 0, minute: 0, ampm: null}, end: {hour: 23, minute: 59, ampm: null}};
                },
                disabledRanges: [],             // defining disabled ranges with array, check the examples
                continuous: false,              // flag to force the range to have no disabled days inside
                disableOnlyStart: false,        // flag to apply the disables only to start dates
                disableOnlyEnd: false,          // flag to apply the disables only to end days
                minSelectedDays: 0,             // minimum number of selected days to be accepted
                enableMonthSwitcher: true,      // flag to enable the month switcher display by clicking the month name on the calendar title
                monthSwitcherFormat: "MMMM",    // Changes the month name display format on the month switcher. Default: "MMMM"
                enableYearSwitcher: true,       // flag to enable the year switcher display by clicking the year on the calendar title
                enableSwipe: true,              // flag to enable the swiped month switch on mobile displays
                numericMonthSelector: false,    // flag to enable displaying numbers instead of month names in month switcher
                reverseTimepickerArrows: false, // flag to reverse the actions of timepicker up and down arrows
                showWeekNumbers: false,         // flag to show/hide week numbers
                hideOutOfRange: false,          // hides or disables out of range months, years, navigation arrows
                DOBCalendar: false,             // Birthdate selection mode
                isRTL: false                    // RTL display
            };
        },
        //////////////////////////////////////////
        // private variables for internal usage //
        //////////////////////////////////////////
        private: function () {
            return {
                startSelected: false,
                currentDate: moment(),
                endSelected: true,
                hoverDate: null,
                keyboardHoverDate: null,
                headerStartDay: null,
                headerStartDate: null,
                headerStartWeekday: null,
                headerEndDay: null,
                headerEndDate: null,
                headerEndWeekday: null,
                swipeTimeout: null,
                isMobile: false,
                valElements: ["BUTTON", "OPTION", "INPUT", "LI", "METER", "PROGRESS", "PARAM"],
                dontHideOnce: false,
                initiator: null,
                initComplete: false,
                startDateBackup: null,
                firstValueSelected: false,
                startDateInitial: null,
                endDateInitial: null,
                startScrolling: false,
                lastScrollDirection: "bottom",
                throttleTimeout: null,
                documentEvent: null,
                delayInputUpdate: false,
                startTimeBackup: null,
                endTimeBackup: null,
                mouseTimer: false,
                preventMouseClick: false,
                lastScrollX: 0,                                     // horizontal buffer variable of scroll positions for using inside requestAnimationFrame
                lastScrollY: 0,                                     // vertical buffer variable of scroll positions for using inside requestAnimationFrame
                isTicking: false,                                   // requestAnimationFrame ticking suppressor
                parentScrollEventsAttached: false,                  // runonce flag for input's scrollable parents, which scroll events are attached once
                rafID: 0,                                           // requestanimationframe ID for cancellation
                disabledDays: {},
                skipTabKeyOnInput: false
            };
        },
        /**
         * initialize the plugin
         * @return calentim object
         */
        init: function () {
            this.config = $.extend({}, this.public(), this.options, this.metadata);
            this.globals = $.extend({}, this.private());
            this.globals.isMobile = this.checkMobile();
            $("body").addClass(this.checkTouch() ? "calentim-touch" : "calentim-notouch");
            this.config.onBeforeInit(this);
            this.applyConfig();
            this.fetchInputs();
            if (this.config.startEmpty === false || this.globals.firstValueSelected) this.globals.currentDate = moment(this.config.startDate);
            this.drawUserInterface();
            this.addInitialEvents();
            this.$elem.data("calentim", this);
            this.config.oninit(this);
            this.globals.initComplete = true;
            this.globals.lastScrollX = window.scrollX || window.pageXOffset || document.documentElement.scrollLeft;
            this.globals.lastScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
            $(window).trigger("resize.calentim");
            return this;
        },
        /**
         * validates start and end dates,
         * swaps dates if end > start,
         * sets visible month of first selection
         *
         * @return void
         */
        validateDates: function () {
            // validate start & end dates
            if (this.config.startDate === null || this.config.endDate === null) return;

            var startDate = moment(this.config.startDate, this.config.format).locale(this.config.locale);
            var endDate = moment(this.config.endDate, this.config.format).locale(this.config.locale);
            var currDate = moment().locale(this.config.locale);

            if (this.config.singleDate === false) {
                if (startDate.isValid() && endDate.isValid()) {
                    if (startDate.isBefore(endDate)) {
                        this.config.startDate = startDate.clone();
                        this.config.endDate = endDate.clone();
                    } else {
                        this.config.startDate = endDate.clone();
                        this.config.endDate = startDate.clone();
                    }
                } else {
                    this.config.startDate = currDate.clone();
                    this.config.endDate = currDate.clone();
                }
                this.config.startDate = this.TimeInsideLimits(this.config.startDate, "start");
                this.config.endDate = this.TimeInsideLimits(this.config.endDate, "end");
            } else {
                if (startDate.isValid() === false) {
                    this.config.startDate = currDate.clone();
                } else {
                    this.config.startDate = startDate.clone();
                }
                this.config.startDate = this.TimeInsideLimits(this.config.startDate, "start");
            }

            // validate min & max dates
            var minDate = null, maxDate = null;

            if (this.config.minDate !== null) {
                minDate = moment(this.config.minDate, this.config.format).locale(this.config.locale);
                if (minDate.isValid()) {
                    this.config.minDate = minDate.clone();
                } else {
                    this.config.minDate = null;
                    minDate = null;
                }
            }

            if (this.config.maxDate !== null) {
                maxDate = moment(this.config.maxDate, this.config.format).locale(this.config.locale);
                if (maxDate.isValid()) {
                    if (minDate) {
                        if (minDate.isBefore(maxDate)) {
                            this.config.maxDate = maxDate.clone();
                        } else {
                            this.config.minDate = maxDate.clone();
                            this.config.maxDate = minDate.clone();
                        }
                    } else {
                        this.config.maxDate = maxDate.clone();
                    }
                } else {
                    this.config.maxDate = null;
                    maxDate = null;
                }
            }
            // validate start and end dates according to min and max dates
            if (minDate && startDate && minDate.isAfter(startDate, "day")) {
                this.config.startDate = minDate.clone();
            }
            if (minDate && endDate && minDate.isAfter(endDate, "day")) {
                this.config.endDate = minDate.clone();
            }

            if (maxDate && startDate && maxDate.isBefore(startDate, "day")) {
                this.config.startDate = maxDate.clone();
            }
            if (maxDate !== null && endDate !== null && maxDate.isBefore(endDate, "day")) {
                this.config.endDate = maxDate.clone();
            }

            if (this.checkRangeContinuity() === false ||
                (this.config.disableOnlyStart == true && this.isDisabled(this.config.startDate, this.config.isHotelBooking)) ||
                (this.config.singleDate === false && this.config.disableOnlyEnd && this.isDisabled(this.config.endDate, this.config.isHotelBooking)) ||
                (this.config.startEmpty && this.globals.firstValueSelected == false)
            ) {
                this.clearInput();
            }
        },
        /**
         * sets config variables and relations between them,
         * for example "inline" property converts the input to hidden input,
         * applies default date from input to plugin and vice versa .. etc.
         *
         * @return void
         */
        applyConfig: function () {
            // set target element to be updated
            if (this.config.target === null) this.config.target = this.$elem;
            // disable dobcalendar if inline
            if (this.config.inline === true) this.config.DOBCalendar = false;

            // switch to singledate when dobcalendar is true
            if (this.config.DOBCalendar == true) this.config.singleDate = true;

            // fix dates
            ["startDate", "endDate", "minDate", "maxDate"].forEach(function (key) {
                this.config[key] = this.fixDateTime(this.config[key]);
            }, this);

            this.config.ranges.map(function (range) {
                range.startDate = this.fixDateTime(range.startDate);
                range.endDate = this.fixDateTime(range.endDate);
                return range;
            }, this);

            // create container relative to environment and settings
            if (this.globals.isMobile === false) {
                if (this.config.inline === true) {
                    this.container = this.$elem.wrapAll("<div class='calentim-container calentim-inline' onclick=''></div>").parent();
                    this.input = $("<div class='calentim-input'></div>").appendTo(this.container);
                    this.elem.type = "hidden";
                    this.config.showButtons = false;
                    this.setViewport();
                } else {
                    this.container = $("<div class='calentim-container calentim-popup' style='display: none;' onclick=''><div class='calentim-box-arrow-top'></div></div>").appendTo(this.config.container);
                    this.input = $("<div class='calentim-input'></div>").appendTo(this.container);
                    if (this.config.showButtons) {
                        this.globals.delayInputUpdate = true;
                        this.config.autoCloseOnSelect = false;
                    }
                }
                if (this.config.rangeOrientation === "horizontal") {
                    this.input.css("width", (this.config.calendarCount * this.config.oneCalendarWidth) + "px");
                } else {
                    this.input.css("width", ((this.config.calendarCount * this.config.oneCalendarWidth) + this.config.verticalRangeWidth) + "px");
                }
            } else {
                if (this.config.inline === true) {
                    this.container = this.$elem.wrapAll("<div class='calentim-container-mobile calentim-inline' onclick=''></div>").parent();
                    this.input = $("<div class='calentim-input'></div>").appendTo(this.container);
                    this.elem.type = "hidden";
                    this.config.showButtons = false;
                } else {
                    this.container = $("<div class='calentim-container-mobile' onclick=''></div>").appendTo(this.config.container);
                    this.input = $("<div class='calentim-input' style='display: none;'></div>").appendTo(this.container);
                    if ($("body > .calentim-overlay").length === 0) {
                        this.overlay = $("<div class='calentim-overlay' style='display: none'></div>").appendTo("body");
                        this.overlay.on("click.calentim tap.calentim", function () {
                            var visibleInstances = $("body > .calentim-container-mobile");
                            if (visibleInstances.length > 0) {
                                visibleInstances.each(function () {
                                    if ($(this).css("display") != "none") {
                                        $(this).find(".calentim-cancel").click();
                                    }
                                });
                            }
                        });
                    } else {
                        this.overlay = $("body > .calentim-overlay").first();
                    }
                    if (this.config.showButtons) {
                        this.config.autoCloseOnSelect = false;
                    }
                    if (!this.config.autoCloseOnSelect) this.globals.delayInputUpdate = true;
                }
                // disable the soft keyboard on mobile devices
                this.$elem.on("focus", function () {
                    $(this).blur();
                });
            }
            if (this.config.isHotelBooking) {
                this.container.addClass("calentim-hotel-style");
            }
            this.container.data("calentim", this);
            this.clearRangeSelection();
        },
        /**
         * Clears the selected range info
         */
        clearRangeSelection: function () {
            for (var range = 0; range < this.config.ranges.length; range++) {
                this.config.ranges[range].selected = false;
            }
            this.container.find(".calentim-range").each(function () {
                $(this).removeClass("calentim-range-selected");
            });
        },
        /**
         * Parse input from the source element's value and apply to config
         * @return void
         */
        fetchInputs: function () {
            var elValue = null;
            if ($.inArray(this.config.target.get(0).tagName, this.globals.valElements) !== -1) {
                elValue = this.config.target.val();
            } else {
                elValue = this.config.target.text();
            }
            if (this.config.singleDate === false && elValue.indexOf(this.config.dateSeparator) > 0 && elValue !== "") {
                var parts = elValue.split(this.config.dateSeparator);
                if (parts.length == 2) {
                    if (moment(parts[0], this.config.format, this.config.locale).isValid() && moment(parts[1], this.config.format, this.config.locale).isValid()) {
                        var parsed = null;
                        if (this.config.showCalendars) {
                            if (moment.isMoment(this.config.startDate)) {
                                // only update the start date
                                parsed = moment(parts[0], this.config.format, this.config.locale);
                                this.config.startDate.year(parsed.year()).month(parsed.month()).date(parsed.date());
                            } else {
                                this.config.startDate = moment(parts[0], this.config.format, this.config.locale);
                            }
                            if (moment.isMoment(this.config.endDate)) {
                                // only update the end date
                                parsed = moment(parts[1], this.config.format, this.config.locale);
                                this.config.endDate.year(parsed.year()).month(parsed.month()).date(parsed.date());
                            } else {
                                this.config.endDate = moment(parts[1], this.config.format, this.config.locale);
                            }
                        }
                        if (this.config.showTimePickers) {
                            if (moment.isMoment(this.config.startDate)) {
                                // only update the start time
                                parsed = moment(parts[0], this.config.format, this.config.locale);
                                this.config.startDate.hour(parsed.hour()).minute(parsed.minute()).seconds(parsed.seconds());
                            } else {
                                this.config.startDate = moment(parts[0], this.config.format, this.config.locale);
                            }
                            if (moment.isMoment(this.config.endDate)) {
                                // only update the end time
                                parsed = moment(parts[1], this.config.format, this.config.locale);
                                this.config.endDate.hour(parsed.hour()).minute(parsed.minute()).seconds(parsed.seconds());
                            } else {
                                this.config.endDate = moment(parts[1], this.config.format, this.config.locale);
                            }
                        }
                        this.globals.firstValueSelected = true;
                    }
                }
            } else if (this.config.singleDate === true) {
                var value = elValue;
                if (value !== "" && moment(value, this.config.format, this.config.locale).isValid()) {
                    this.config.startDate = moment(value, this.config.format, this.config.locale);
                    this.config.endDate = moment(value, this.config.format, this.config.locale);
                    this.globals.firstValueSelected = true;
                }
            }

            // clear input if startEmpty is defined
            if (this.config.startEmpty && (!this.globals.firstValueSelected)) {
                this.clearInput();
            }
            // validate inputs
            this.validateDates();
            this.updateTimePickerDisplay();
        },
        /**
         * Draws the plugin interface when needed
         * @return void
         */
        drawUserInterface: function () {
            this.drawHeader();
            this.calendars = this.input.find(".calentim-calendars").first();
            if (this.config.showCalendars === true) {
                var nextCal = this.globals.currentDate.clone().middleOfDay();
                this.globals.disabledDays = {};
                for (var calendarIndex = 0; calendarIndex < this.config.calendarCount; calendarIndex++) {
                    this.drawCalendarOfMonth(nextCal);
                    nextCal = nextCal.month(nextCal.month() + 1);
                }
                // remove last border
                this.calendars.find(".calentim-calendar").last().addClass("no-border-right");
                this.drawArrows();
            } else {
                this.calendars.hide();
                this.container.addClass("calentim-hidden-calendar");
            }
            this.drawTimePickers();
            this.addKeyboardEvents();
            this.drawFooter();
            this.reDrawCells();
            if (this.globals.initComplete) {
                this.setViewport();
            }
            if (this.config.isRTL) {
                this.container.css("direction", "rtl");
                this.container.addClass("calentim-rtl");
            }
            if (this.globals.startSelected === false) {
                if (this.globals.initComplete) {
                    this.updateInput(false, false);
                } else {
                    var delayState = this.globals.delayInputUpdate;
                    this.globals.delayInputUpdate = false;
                    this.updateInput(false, false);
                    this.globals.delayInputUpdate = delayState;
                }
            }
        },
        /**
         * Draws the header part of the plugin, which contains start and end date displays
         * @return void
         */
        drawHeader: function () {
            var headers = "<div class='calentim-header'>" + "<div class='calentim-header-start'>" + "<div class='calentim-header-start-day'></div>" + "<div class='calentim-header-start-date'></div>" + "<div class='calentim-header-start-weekday'></div>" + "</div>";
            if (this.config.singleDate === false) {
                headers += "<div class='calentim-header-separator'>" + this.config.headerSeparator + "</div>" + "<div class='calentim-header-end'>" + "<div class='calentim-header-end-day'></div>" + "<div class='calentim-header-end-date'></div>" + "<div class='calentim-header-end-weekday'></div>" + "</div>";
            }
            headers += "</div><div class='calentim-calendars' tabindex='0'></div>";
            this.input.append(headers);
            if (this.config.showHeader === false || this.config.showCalendars === false) {
                this.input.find(".calentim-header").hide();
            }
            this.globals.headerStartDay = this.input.find(".calentim-header-start-day");
            this.globals.headerStartDate = this.input.find(".calentim-header-start-date");
            this.globals.headerStartWeekday = this.input.find(".calentim-header-start-weekday");
            this.globals.headerEndDay = this.input.find(".calentim-header-end-day");
            this.globals.headerEndDate = this.input.find(".calentim-header-end-date");
            this.globals.headerEndWeekday = this.input.find(".calentim-header-end-weekday");
            this.updateHeader();
        },
        /**
         * Updates the start and end dates in the header
         * @return void
         */
        updateHeader: function () {
            if (this.config.startDate !== null) {
                this.config.startDate.locale(this.config.locale);
                this.globals.headerStartDay.text(this.localizeNumbers(this.config.startDate.date()));
                if (this.globals.isMobile) this.globals.headerStartDate.text(this.config.startDate.format("MMM") + " " + this.localizeNumbers(this.config.startDate.year()));
                else this.globals.headerStartDate.text(this.config.startDate.format("MMMM") + " " + this.localizeNumbers(this.config.startDate.year()));
                this.globals.headerStartWeekday.text(this.config.startDate.format("dddd"));
            } else {
                this.globals.headerStartDay.text("");
                this.globals.headerStartDate.text("");
                this.globals.headerStartWeekday.text("");
            }
            if (this.config.singleDate === false) {
                if (this.config.endDate !== null) {
                    this.config.endDate.locale(this.config.locale);
                    this.globals.headerEndDay.text(this.localizeNumbers(this.config.endDate.date()));
                    if (this.globals.isMobile) this.globals.headerEndDate.text(this.config.endDate.format("MMM") + " " + this.localizeNumbers(this.config.endDate.year()));
                    else this.globals.headerEndDate.text(this.config.endDate.format("MMMM") + " " + this.localizeNumbers(this.config.endDate.year()));
                    this.globals.headerEndWeekday.text(this.config.endDate.format("dddd"));
                } else {
                    this.globals.headerEndDay.text("");
                    this.globals.headerEndDate.text("");
                    this.globals.headerEndWeekday.text("");
                }
            }
        },
        /**
         * checks for updateInput to be run or dismissed
         * @return {boolean} whether the input should be updated or not
         */
        isUpdateable: function () {
            var returnReasons = this.globals.delayInputUpdate;
            var clearReasons = this.config.startEmpty && (!this.globals.firstValueSelected);
            clearReasons = clearReasons || (this.config.singleDate === true && this.config.startDate === null);
            clearReasons = clearReasons || (this.config.singleDate === false && (this.config.startDate === null || (this.globals.startSelected === false && this.config.endDate === null)));
            if (clearReasons) this.clearInput();
            if (clearReasons || returnReasons) return false;
            return true;
        },
        /**
         * Updates the connected input element value when the value is chosen
         * @return void
         */
        updateInput: function (callSelectEvent, isTimeEvent) {
            // if the input should not be updated by change, return.
            if (!this.isUpdateable()) return;

            // read time from DOM elements.
            this.readTimeFromDisplay(false);
            if (this.config.startDate && this.config.endDate) {
                // fix the locales once more.
                this.config.startDate.locale(this.config.locale);
                this.config.endDate.locale(this.config.locale);

                // update the plugin input.
                if ($.inArray(this.config.target.get(0).tagName, this.globals.valElements) !== -1) {
                    if (this.config.singleDate === false) {
                        this.config.target.val(this.config.startDate.format(this.config.format) + this.config.dateSeparator + this.config.endDate.format(this.config.format));
                    } else {
                        this.config.target.val(this.config.startDate.format(this.config.format));
                    }
                } else {
                    if (this.config.singleDate === false) {
                        this.config.target.text(this.config.startDate.format(this.config.format) + this.config.dateSeparator + this.config.endDate.format(this.config.format));
                    } else {
                        this.config.target.text(this.config.startDate.format(this.config.format));
                    }
                }
                // if the call needs events to be triggered, trigger them.
                if (this.globals.initComplete) {
                    if (isTimeEvent) this.config.ontimechange(this, this.config.startDate ? this.config.startDate.clone() : null, this.config.endDate ? this.config.endDate.clone() : null);
                    else if (callSelectEvent) this.config.onafterselect(this, this.config.startDate ? this.config.startDate.clone() : null, this.config.endDate ? this.config.endDate.clone() : null);
                    this.input.trigger("change");
                }
            }
        },
        /**
         * Clears the input and prepares it for a new date range selection
         * @return void
         */
        clearInput: function (stayEmpty) {
            if ($.inArray(this.config.target.get(0).tagName, this.globals.valElements) !== -1) {
                if (this.config.singleDate === false) this.config.target.val("");
                else this.config.target.val("");
            } else {
                if (this.config.singleDate === false) this.config.target.text("");
                else this.config.target.text("");
            }

            this.config.startDate = null;
            this.config.endDate = null;
            this.globals.startDateInitial = null;
            this.globals.endDateInitial = null;

            if (stayEmpty) {
                this.config.startEmpty = true;
                this.globals.firstValueSelected = false;
            } else {
                if (this.config.startEmpty == true) this.globals.firstValueSelected = false;
            }

            if (this.globals.initComplete) {
                this.updateHeader();
                var applyButton = typeof this.footer == "undefined" ? [] : this.footer.find(".calentim-apply");
                if (applyButton.length > 0) applyButton.attr("disabled", "disabled");
            }
        },
        /**
         * Draws the arrows of the month switcher
         * @return void
         */
        drawArrows: function () {
            var hideLeftArrow = this.config.hideOutOfRange && this.config.minDate && this.globals.currentDate.clone().add(-1, "month").isBefore(this.config.minDate, "month");
            var hideRightArrow = this.config.hideOutOfRange && this.config.maxDate && this.globals.currentDate.clone().add(this.config.calendarCount, "month").isAfter(this.config.maxDate, "month");
            if (this.container.find(".calentim-title").length > 0) {
                if (this.globals.isMobile) {
                    if (!hideLeftArrow) this.container.find(".calentim-title").prepend("<div class='calentim-prev'>" + this.config.prevMonthIcon + "</div>");
                    if (!hideRightArrow) this.container.find(".calentim-title").append("<div class='calentim-next'>" + this.config.nextMonthIcon + "</div>");
                } else {
                    if (!hideLeftArrow) this.container.find(".calentim-title").first().prepend("<div class='calentim-prev'>" + this.config.prevMonthIcon + "</div>");
                    if (!hideRightArrow) this.container.find(".calentim-title").last().append("<div class='calentim-next'>" + this.config.nextMonthIcon + "</div>");
                }
            }
        },
        /**
         * Draws a single calendar
         * @param  [moment object] _month: The moment object containing the desired month, for example given "18/02/2017" as moment object draws the calendar of February 2017.
         * @return void
         */
        drawCalendarOfMonth: function (_month) {
            _month.locale(this.config.locale);
            var calendarStart = moment(_month).locale(this.config.locale).startOf("month").startOf("isoweek").middleOfDay();
            var startOfWeek = calendarStart.day();
            if (startOfWeek == 1 && this.config.startOnMonday === false) {
                calendarStart.subtract(1, "days");
                startOfWeek = 0;
            } else if (startOfWeek === 0 && this.config.startOnMonday === true) {
                calendarStart.add(1, "days");
                startOfWeek = 1;
            }
            if (calendarStart.isAfter(moment(_month).date(1))) calendarStart.add(-7, "day");
            var calendarOutput = "<div class='calentim-calendar" + ((this.config.showWeekNumbers) ? " calentim-calendar-weeknumbers" : "") + "' data-month='" + _month.month() + "'>";
            var boxCount = 0;
            var monthClass = "",
                yearClass = "";
            if (this.config.enableMonthSwitcher) monthClass = " class='calentim-month-switch'";
            if (this.config.enableYearSwitcher) yearClass = " class='calentim-year-switch'";

            calendarOutput += "<div class='calentim-title'><span><b" + monthClass + ">" + _month.format("MMMM") + "</b>&nbsp;<span" + yearClass + ">" + this.localizeNumbers(_month.year()) + "</span></span></div>";
            calendarOutput += "<div class='calentim-days-container'>";
            if (this.config.showWeekNumbers) calendarOutput += "<div class='calentim-dayofweek'>&nbsp;</div>";
            for (var days = startOfWeek; days < startOfWeek + 7; days++) {
                calendarOutput += "<div class='calentim-dayofweek'>" + moment().day(days % 7).locale(this.config.locale).format("ddd") + "</div>";
            }
            var prevDisabled = true, prevKey = null;
            while (boxCount < 42) {
                var cellDate = calendarStart.middleOfDay().unix();
                var cellStyle = (_month.month() == calendarStart.month()) ? "calentim-day" : "calentim-disabled";
                if (boxCount % 7 === 0 && this.config.showWeekNumbers) {
                    calendarOutput += "<div class='calentim-weeknumber'><span>" + calendarStart.format("ww") + "</span></div>";
                }
                calendarOutput += "<div class='" + cellStyle + "' data-value='" + cellDate + "'><span>" + this.localizeNumbers(calendarStart.date()) + "</span></div>";

                /**
                 * Disabled Date Values
                 * 1 => Start of Range disabled
                 * 2 => Fully disabled
                 * 3 => End of Range disabled
                 */

                if (this.isDisabledOnDraw(calendarStart)) {
                    this.globals.disabledDays[cellDate] = prevDisabled == true ? 2 : 1;
                    prevDisabled = true;
                    prevKey = cellDate;
                } else {
                    if (prevDisabled == true && prevKey != null) {
                        this.globals.disabledDays[prevKey] = 3;
                    }
                    prevDisabled = false;
                }
                calendarStart.add(moment.duration({days: 1}));
                boxCount++;
            }
            calendarOutput += "</div>";
            calendarOutput += "</div>";
            this.calendars.append(calendarOutput);
        },
        /**
         * Draws the time pickers on the calendar
         * @return {nothing}
         */
        drawTimePickers: function () {
            this.input.find(".calentim-timepickers").remove();
            this.input.append("<div class='calentim-timepickers'></div>");
            this.timepickers = this.input.find(".calentim-timepickers");
            if (!this.config.showTimePickers) this.timepickers.hide();

            var hourStart = 0;
            var hourEnd = 23;
            var addAMPM = false;
            var AMPM = null;
            if (this.config.hourFormat == 12) {
                hourStart = 1;
                hourEnd = 12;
                addAMPM = true;
            }
            var minuteStart = 0;
            var minuteEnd = 59;

            // start time pickers
            var timePicker = $("<div class='calentim-timepicker calentim-timepicker-start'></div>").appendTo(this.timepickers);
            // start time picker hour
            this.addTimePickerHours(timePicker, hourStart, hourEnd);
            this.addTimePickerHourMinuteSeparator(timePicker);
            this.addTimePickerMinutes(timePicker, this.config.minuteSteps, minuteStart, minuteEnd);
            if (addAMPM) {
                this.addTimePickerAMPM(timePicker);
            }

            if (this.config.singleDate === false) {
                // end time pickers
                // end time picker hours
                timePicker = $("<div class='calentim-timepicker calentim-timepicker-end'></div>").appendTo(this.timepickers);
                this.addTimePickerHours(timePicker, hourStart, hourEnd);
                this.addTimePickerHourMinuteSeparator(timePicker);
                this.addTimePickerMinutes(timePicker, this.config.minuteSteps, minuteStart, minuteEnd);
                if (addAMPM) {
                    this.addTimePickerAMPM(timePicker);
                }
            }
            this.addTimePickerEvents();
            this.updateTimePickerDisplay();
        },
        /**
         * Appends the timepicker hours interface
         * @param {DOM Element} container the container to append to
         * @param {int} min the minimum hour
         * @param {int} max the maximum hour
         */
        addTimePickerHours: function (container, min, max) {
            var isStart = container[0].classList.contains("calentim-timepicker-start");
            var timePickerHoursWrapper = $("<div class='calentim-timepicker-hours-wrapper' tabindex='0'></div>").appendTo(container);
            var timePickerHours = $("<div class='calentim-timepicker-hours'></div>").appendTo(timePickerHoursWrapper);
            var timePickerHoursDOM = "<div class='calentim-hour-selected-prev'>&nbsp;</div>";
            // appending hours
            timePickerHoursDOM += "<div class='calentim-hour-selected'>" + ("00" + min).slice(-2) + "</div>";
            timePickerHoursDOM += "<div class='calentim-hour-selected-next'>" + ("00" + (min + 1)).slice(-2) + "</div>";
            timePickerHours.append(timePickerHoursDOM).data({
                value: min,
                min: min,
                max: max,
                step: 1
            });
            $("<div class='calentim-timepicker-hour-arrows'>" +
                "<div class='calentim-timepicker-hours-up " + (!this.config.reverseTimepickerArrows ? "calentim-direction-up" : "calentim-direction-down") + "'><i class='fa fa-arrow-up'></i></div>" +
                "<div class='calentim-timepicker-hours-down " + (!this.config.reverseTimepickerArrows ? "calentim-direction-down" : "calentim-direction-up") + "'><i class='fa fa-arrow-down'></i></div>" +
                "</div>").appendTo(container);
        },
        /**
         * Appends the timepicker minutes interface
         * @param {DOM Element} container the container to append to
         * @param {int} step the step parameter to the minutes
         */
        addTimePickerMinutes: function (container, step, min, max) {
            // start time picker minutes
            var isStart = container[0].classList.contains("calentim-timepicker-start");
            var timePickerMinutesWrapper = $("<div class='calentim-timepicker-minutes-wrapper' tabindex='0'></div>").appendTo(container);
            var timePickerMinutes = $("<div class='calentim-timepicker-minutes'></div>").appendTo(timePickerMinutesWrapper);
            var timePickerMinutesDOM = "<div class='calentim-minute-selected-prev'>&nbsp;</div>";
            timePickerMinutesDOM += "<div class='calentim-minute-selected'>00</div>";
            timePickerMinutesDOM += "<div class='calentim-minute-selected-next'>01</divided>";
            timePickerMinutes.append(timePickerMinutesDOM).data({
                value: min,
                min: min,
                max: (max % step !== 0) ? max - (max % step) : max,
                step: step
            });
            $("<div class='calentim-timepicker-minute-arrows'><div class='calentim-timepicker-minutes-up " + (!this.config.reverseTimepickerArrows ? "calentim-direction-up" : "calentim-direction-down") + "'><i class='fa fa-arrow-up'></i></div>" +
                "<div class='calentim-timepicker-minutes-down " + (!this.config.reverseTimepickerArrows ? "calentim-direction-down" : "calentim-direction-up") + "'><i class='fa fa-arrow-down'></i></div></div>").appendTo(container);
        },
        /**
         * Appends the seperator between the minutes and the hours
         * @param {DOM Element} container the container to append to
         */
        addTimePickerHourMinuteSeparator: function (container) {
            $("<div class='calentim-hour-minute-seperator'>:</div>").appendTo(container);
        },
        /**
         * Appends the AM/PM picker to the container
         * @param {DOM Element} container the container to append to
         */
        addTimePickerAMPM: function (container) {
            var isStart = container[0].classList.contains("calentim-timepicker-start");
            var AMPM = $("<div class='calentim-timepicker-ampm' tabindex='0'></div>").appendTo(container);
            AMPM.append("<div class='calentim-timepicker-ampm-am'>" + this.localizeAMPM("AM") + "</div>");
            AMPM.append("<div class='calentim-timepicker-ampm-pm'>" + this.localizeAMPM("PM") + "</div>");
        },
        /**
         * Binds the events on the time picker children
         */
        addTimePickerEvents: function () {
            var that = this;
            // main click event
            var clickEvent = function (element) {
                var that = element.parents(".calentim-container, .calentim-container-mobile").first().data("calentim");
                var parentClass = element.parents(".calentim-timepicker").attr("class");
                var elemClass = element.attr("class");
                var parent = parentClass.indexOf("calentim-timepicker-start") >= 0 ? "start" : "end";
                var part = elemClass.indexOf("timepicker-minutes") > 0 ? "minute" : "hour";
                var direction = elemClass.indexOf("calentim-direction-up") >= 0 ? "up" : "down";

                if (that.config[parent + "Date"] !== null) {
                    var steps = part == "hour" ? 1 : that.config.minuteSteps;
                    var refDate = that.config[parent + "Date"];
                    var newValue = refDate.clone().add(that.config.reverseTimepickerArrows === false ?
                        (direction == "up" ? -1 * steps : steps) :
                        (direction == "down" ? steps : -1 * steps), part);

                    newValue.set({date: refDate.date(), month: refDate.month(), year: refDate.year()});

                    var newValueCopy = that.TimeInsideLimits(newValue, refDate);

                    that.config[parent + "Date"] = newValueCopy.clone();
                    that.updateTimePickerDisplay();
                    that.updateInput(false, true);
                }
            };
            // mousedown / click events
            $(document).off("mousedown.calentim").on("mousedown.calentim", ".calentim-timepicker-minutes-up, .calentim-timepicker-minutes-down, .calentim-timepicker-hours-up, .calentim-timepicker-hours-down", function (e) {
                var that2 = this;
                if (that.globals.mouseTimer) clearInterval(that.globals.mouseTimer);
                clickEvent($(that2));
                that.globals.mouseTimer = setInterval(function () {
                    clickEvent($(that2));
                }, 200);
            }).off("mouseup.calentim").on("mouseup.calentim", function (e) {
                if (that.globals.mouseTimer) clearInterval(that.globals.mouseTimer);
                that.globals.preventMouseClick = true;
            }).off("click.calentim").on("click.calentim", ".calentim-timepicker-minutes-up, .calentim-timepicker-minutes-down, .calentim-timepicker-hours-up, .calentim-timepicker-hours-down", function (e) {
                if (!that.globals.preventMouseClick) {
                    clickEvent($(this));
                }
                that.globals.preventMouseClick = false;
            });

            // mouse wheel events
            this.timepickers.find(".calentim-timepicker-hours-wrapper, .calentim-timepicker-minutes-wrapper")
                .off("mousewheel.calentim DOMMouseScroll.calentim")
                .on("mousewheel.calentim DOMMouseScroll.calentim", function (e) {
                    var wheelDelta = e.originalEvent.wheelDelta || -e.originalEvent.detail;
                    if (wheelDelta / 120 > 0) {
                        if ($(e.currentTarget).hasClass("calentim-timepicker-hours-wrapper")) {
                            clickEvent($(this).siblings(".calentim-timepicker-hour-arrows").find(".calentim-timepicker-hours-up"));
                        } else if ($(e.currentTarget).hasClass("calentim-timepicker-minutes-wrapper")) {
                            clickEvent($(this).siblings(".calentim-timepicker-minute-arrows").find(".calentim-timepicker-minutes-up"));
                        }
                    } else {
                        if ($(e.currentTarget).hasClass("calentim-timepicker-hours-wrapper")) {
                            clickEvent($(this).siblings(".calentim-timepicker-hour-arrows").find(".calentim-timepicker-hours-down"));
                        } else if ($(e.currentTarget).hasClass("calentim-timepicker-minutes-wrapper")) {
                            clickEvent($(this).siblings(".calentim-timepicker-minute-arrows").find(".calentim-timepicker-minutes-down"));
                        }
                    }
                    that.stopBubbling(e);
                });

            // mobile events
            if (this.globals.isMobile) {
                this.timepickers.find(".calentim-timepicker-minutes, .calentim-timepicker-hours").each(function () {
                    var hammer = new Hammer(this);
                    hammer.get('pan').set({
                        direction: Hammer.DIRECTION_VERTICAL
                    });
                    hammer.on("panmove", that.panThrottle(function (e) {
                        var elem = $(e.target);
                        if (e.velocityY > 0) {
                            if (elem.hasClass("calentim-timepicker-hours-wrapper") || elem.parents(".calentim-timepicker-hours-wrapper").length > 0) {
                                clickEvent(elem.parents(".calentim-timepicker").find(".calentim-timepicker-hours-up"));
                                that.stopBubbling(e.srcEvent);
                            } else if (elem.hasClass("calentim-timepicker-minutes-wrapper") || elem.parents(".calentim-timepicker-minutes-wrapper").length > 0) {
                                clickEvent(elem.parents(".calentim-timepicker").find(".calentim-timepicker-minutes-up"));
                                that.stopBubbling(e.srcEvent);
                            }
                        } else {
                            if (elem.hasClass("calentim-timepicker-hours-wrapper") || elem.parents(".calentim-timepicker-hours-wrapper").length > 0) {
                                clickEvent(elem.parents(".calentim-timepicker").find(".calentim-timepicker-hours-down"));
                                that.stopBubbling(e.srcEvent);
                            } else if (elem.hasClass("calentim-timepicker-minutes-wrapper") || elem.parents(".calentim-timepicker-minutes-wrapper").length > 0) {
                                clickEvent(elem.parents(".calentim-timepicker").find(".calentim-timepicker-minutes-down"));
                                that.stopBubbling(e.srcEvent);
                            }
                        }
                        return false;
                    }));
                });
            }
            // AMPM button events
            this.timepickers.find(".calentim-timepicker-ampm > div").off("click.calentim").on("click.calentim", function () {
                var selectedMoment;
                if ($(this).hasClass("calentim-ampm-selected")) return false;
                $(this).addClass("calentim-ampm-selected").siblings().removeClass("calentim-ampm-selected");
                that.updateInput(false, false);
                if (that.config.startDate) {
                    selectedMoment = that.config.startDate.clone();
                    that.config.startDate = that.TimeInsideLimits(that.config.startDate, "start");
                    if (that.config.startDate.isSame(selectedMoment) === false) that.updateTimePickerDisplay();
                }
                if (that.config.endDate) {
                    selectedMoment = that.config.endDate.clone();
                    that.config.endDate = that.TimeInsideLimits(that.config.endDate, "end");
                    if (that.config.endDate.isSame(selectedMoment) === false) that.updateTimePickerDisplay();
                }
                that.updateInput(false, true);
                that.config.ondraw(that);
            });

        },
        /**
         * Dynamic delay throttling for mouse pan move event
         * @param  {Function} fn         The function to call
         * @return {nothing}             nothing
         */
        panThrottle: function (fn) {
            return $.proxy(function () {
                var ctx = this;
                var args = Array.prototype.slice.call(arguments);
                var divisor = Math.ceil(Math.abs(args[0].deltaY) / 20) || 1; // 20px steps for increasing speed
                if (this.globals.panScrollPos != divisor) {
                    fn.apply(ctx, args);
                    this.globals.panScrollPos = divisor;
                }
            }, this);
        },
        /**
         * Triggers the styling update of the time pickers
         * @param  {event object} e the event that triggered the update
         * @return {nothing}
         */
        readTimeFromDisplay: function (backup) {
            var startDate = null;
            var endDate = null;
            var startString = "", endString = "";
            if (this.config.hourFormat == 12) {
                startString = this.timepickers.find(".calentim-timepicker-start .calentim-hour-selected").text() +
                    " " + this.timepickers.find(".calentim-timepicker-start .calentim-minute-selected").text() +
                    " " + this.timepickers.find(".calentim-timepicker-start .calentim-ampm-selected").text();
                startDate = moment(startString, "hh mm a", this.config.locale);
                if (this.config.singleDate === false) {
                    endString = this.timepickers.find(".calentim-timepicker-end .calentim-hour-selected").text() +
                        " " + this.timepickers.find(".calentim-timepicker-end .calentim-minute-selected").text() +
                        " " + this.timepickers.find(".calentim-timepicker-end .calentim-ampm-selected").text();
                    endDate = moment(endString, "hh mm a", this.config.locale);
                }
            } else {
                startString = this.timepickers.find(".calentim-timepicker-start .calentim-hour-selected").text() +
                    " " + this.timepickers.find(".calentim-timepicker-start .calentim-minute-selected").text();
                startDate = moment(startString, "HH mm", this.config.locale);
                if (this.config.singleDate === false) {
                    endString = this.timepickers.find(".calentim-timepicker-end .calentim-hour-selected").text() +
                        " " + this.timepickers.find(".calentim-timepicker-end .calentim-minute-selected").text();
                    endDate = moment(endString, "HH mm", this.config.locale);
                }
            }
            if (startDate.isValid() && this.config.startDate !== null) {
                this.config.startDate.hours(startDate.hours()).minutes(startDate.minutes()).locale(this.config.locale);
            }
            if (this.config.singleDate === false && endDate.isValid() && this.config.endDate !== null) {
                this.config.endDate.hours(endDate.hours()).minutes(endDate.minutes()).locale(this.config.locale);
            }
            if (backup) {
                if (startDate) this.globals.startTimeBackup = startDate.clone();
                if (endDate && this.config.singleDate === false) this.globals.endTimeBackup = endDate.clone();
            }
        },
        /**
         * reads time picker display values from the UI and backs it up
         */
        backupTimePickers: function () {
            this.readTimeFromDisplay(true);
        },
        /**
         * restores time picker display values from the backed up UI values
         */
        restoreTimePickers: function () {
            if (this.config.hourFormat == 12) {
                if (this.globals.startTimeBackup) this.setStartTimeValue(
                    parseInt(this.globals.startTimeBackup.clone().locale("en").format("hh"), 10),
                    parseInt(this.globals.startTimeBackup.clone().locale("en").format("mm"), 10),
                    this.globals.startTimeBackup.clone().locale("en").format("a")
                );
                if ((!this.config.singleDate) && this.globals.endTimeBackup) this.setEndTimeValue(
                    parseInt(this.globals.endTimeBackup.clone().locale("en").format("hh"), 10),
                    parseInt(this.globals.endTimeBackup.clone().locale("en").format("mm"), 10),
                    this.globals.endTimeBackup.clone().locale("en").format("a"));
            } else {
                if (this.globals.startTimeBackup) this.setStartTimeValue(
                    parseInt(this.globals.startTimeBackup.clone().locale("en").format("HH"), 10),
                    parseInt(this.globals.startTimeBackup.clone().locale("en").format("mm"), 10),
                    null);
                if ((!this.config.singleDate) && this.globals.endTimeBackup) this.setEndTimeValue(
                    parseInt(this.globals.endTimeBackup.clone().locale("en").format("HH"), 10),
                    parseInt(this.globals.endTimeBackup.clone().locale("en").format("mm"), 10),
                    null);
            }
        },
        /**
         * Fetches the time from config and displays on the timepickers
         * @return {nothing}
         */
        updateTimePickerDisplay: function () {
            if (this.timepickers !== undefined) {
                if (this.config.startDate !== null) {
                    var startDate = this.config.startDate.clone().locale("en").set({
                        minute: (this.config.minuteSteps != 1) ?
                            Math.round(this.config.startDate.minutes() / this.config.minuteSteps) * this.config.minuteSteps : this.config.startDate.minutes()
                    }), startHour = startDate.hours(), startMinute = startDate.minutes(), startAMPM = null;
                    if (this.config.hourFormat == 12) {
                        var startHourFormatted = startDate.format("hh mm a").split(' ');
                        startHour = parseInt(startHourFormatted[0], 10);
                        startAMPM = startHourFormatted[2].toLowerCase();
                    }
                    this.setStartTimeValue(startHour, startMinute, startAMPM);
                }
                if (this.config.endDate !== null) {
                    var endDate = this.config.endDate.clone().locale("en").set({
                        minute: (this.config.minuteSteps != 1) ?
                            Math.round(this.config.endDate.minutes() / this.config.minuteSteps) * this.config.minuteSteps : this.config.endDate.minutes()
                    }), endHour = endDate.hours(), endMinute = endDate.minutes(), endAMPM = null;
                    if (this.config.hourFormat == 12) {
                        var endHourFormatted = endDate.format("hh mm a").split(' ');
                        endHour = parseInt(endHourFormatted[0], 10);
                        endAMPM = endHourFormatted[2].toLowerCase();
                    }
                    this.setEndTimeValue(endHour, endMinute, endAMPM);
                }
            }
            this.TimePickerOutOfLimitView();
        },
        /**
         * Sets Start Time Values
         * @param {int} hour the hour 0-11
         * @param {int} minute the minute 0-59
         * @param {string} ampm the part of the day ("am" or "pm")
         */
        setStartTimeValue: function (hour, minute, ampm) {
            var that = this;
            var picker = this.timepickers.find(".calentim-timepicker-start");
            /**
             * Process Hour Display
             */
            var hours = picker.find(".calentim-timepicker-hours");
            hours.data("value", hour);
            var props = hours.data();
            if (props && props.hasOwnProperty("value")) {
                hours.find(".calentim-hour-selected").text(this.localizeNumbers(("00" + props.value).slice(-2)));
                hours.find(that.config.reverseTimepickerArrows ? ".calentim-hour-selected-next" : ".calentim-hour-selected-prev").text(
                    this.localizeNumbers((props.value - props.step < props.min) ? ("00" + (props.max)).slice(-2) : ("00" + (props.value - props.step)).slice(-2))
                );
                hours.find(that.config.reverseTimepickerArrows ? ".calentim-hour-selected-prev" : ".calentim-hour-selected-next").text(
                    this.localizeNumbers((props.value + props.step > props.max) ? ("00" + (props.min)).slice(-2) : ("00" + (props.value + props.step)).slice(-2))
                );
            }
            /**
             * Process Minute Display
             */
            var minutes = picker.find(".calentim-timepicker-minutes");
            minutes.data("value", minute);
            props = minutes.data();
            if (props && props.hasOwnProperty("value")) {
                minutes.find(".calentim-minute-selected").text(this.localizeNumbers(("00" + props.value).slice(-2)));
                minutes.find(that.config.reverseTimepickerArrows ? ".calentim-minute-selected-next" : ".calentim-minute-selected-prev").text(
                    this.localizeNumbers((props.value - props.step < props.min) ? ("00" + (props.max)).slice(-2) : ("00" + (props.value - props.step)).slice(-2))
                );
                minutes.find(that.config.reverseTimepickerArrows ? ".calentim-minute-selected-prev" : ".calentim-minute-selected-next").text(
                    this.localizeNumbers((props.value + props.step > props.max) ? ("00" + (props.min)).slice(-2) : ("00" + (props.value + props.step)).slice(-2))
                );
            }
            /**
             * Process Meridiem Display
             */
            if (ampm !== null) {
                picker.find(".calentim-ampm-selected").removeClass("calentim-ampm-selected");
                picker.find(".calentim-timepicker-ampm-" + ampm).addClass("calentim-ampm-selected");
            }
        },
        /**
         * Localizes the given AM/PM string to the current locale
         * @param {string} input The string to be localized
         * @returns {string} The localized am/pm string
         */
        localizeAMPM: function (input) {
            return moment("00:00 " + input, "HH:mm A").locale(this.config.locale).format("A");
        },
        /**
         * Localizes the given number to the current locale
         * @param {string} input The number to be localized
         * @returns {string} The localized number string
         */
        localizeNumbers: function (input) {
            return moment.localeData(this.config.locale).postformat('' + input);
        },
        /**
         * sets End Time Value
         * @param {int} hour the hour 0-11
         * @param {int} minute the minute 0-59
         * @param {string} ampm the part of the day ("am" or "pm")
         */
        setEndTimeValue: function (hour, minute, ampm) {
            var that = this;
            var picker = this.timepickers.find(".calentim-timepicker-end");
            var hours = picker.find(".calentim-timepicker-hours");
            hours.data("value", hour);
            var props = hours.data();
            if (props && props.hasOwnProperty("value")) {
                hours.find(".calentim-hour-selected").text(this.localizeNumbers(("00" + props.value).slice(-2)));
                hours.find(that.config.reverseTimepickerArrows ? ".calentim-hour-selected-next" : ".calentim-hour-selected-prev").text(
                    this.localizeNumbers((props.value - props.step < props.min) ? ("00" + (props.max)).slice(-2) : ("00" + (props.value - props.step)).slice(-2))
                );
                hours.find(that.config.reverseTimepickerArrows ? ".calentim-hour-selected-prev" : ".calentim-hour-selected-next").text(
                    this.localizeNumbers((props.value + props.step > props.max) ? ("00" + (props.min)).slice(-2) : ("00" + (props.value + props.step)).slice(-2))
                );
            }
            var minutes = picker.find(".calentim-timepicker-minutes");
            minutes.data("value", minute);
            props = minutes.data();
            if (props && props.hasOwnProperty("value")) {
                minutes.find(".calentim-minute-selected").text(this.localizeNumbers(("00" + props.value).slice(-2)));
                minutes.find(that.config.reverseTimepickerArrows ? ".calentim-minute-selected-next" : ".calentim-minute-selected-prev").text(
                    this.localizeNumbers((props.value - props.step < props.min) ? ("00" + (props.max)).slice(-2) : ("00" + (props.value - props.step)).slice(-2))
                );
                minutes.find(that.config.reverseTimepickerArrows ? ".calentim-minute-selected-prev" : ".calentim-minute-selected-next").text(
                    this.localizeNumbers((props.value + props.step > props.max) ? ("00" + (props.min)).slice(-2) : ("00" + (props.value + props.step)).slice(-2))
                );
            }
            if (ampm !== null) {
                picker.find(".calentim-ampm-selected").removeClass("calentim-ampm-selected");
                picker.find(".calentim-timepicker-ampm-" + ampm).addClass("calentim-ampm-selected");
            }
        },
        /**
         * converts 12h limits to 24h limits
         *
         * @param   object  limits     The defined limits
         * @return  object
         */
        convertLimits: function (limits) {
            var startdate = moment("00:00", "HH:mm"), enddate = moment("23:59", "HH:mm");
            if (limits.hasOwnProperty("start")) {
                if (limits.start.hasOwnProperty("ampm") && typeof (limits.start.ampm) === "string" && ["am", "pm"].indexOf(limits.start.ampm.toLowerCase()) >= 0) {
                    // has a valid ampm setting, should be at 12h format
                    startdate = moment(limits.start.hour + ":" + limits.start.minute + " " + limits.start.ampm.toLowerCase(), "h:m a");
                } else {
                    // should be 24h format
                    startdate = moment(limits.start.hour + ":" + limits.start.minute, "H m");
                }

                if (limits.hasOwnProperty("end")) {
                    if (limits.end.hasOwnProperty("ampm") && typeof (limits.end.ampm) === "string" && ["am", "pm"].indexOf(limits.end.ampm.toLowerCase()) >= 0) {
                        // has a valid ampm setting, should be at 12h format
                        enddate = moment(limits.end.hour + ":" + limits.end.minute + " " + limits.end.ampm.toLowerCase(), "h:m a");
                    } else {
                        // should be 24h format
                        enddate = moment(limits.end.hour + ":" + limits.end.minute, "H m");
                    }
                }
            }
            return {
                start: {hour: startdate.hour(), minute: startdate.minute()},
                end: {hour: enddate.hour(), minute: enddate.minute()}
            };
        },
        /**
         * Checks the interface of available time ranges
         */
        fixLimits: function (limits) {
            var defaultRange = [{start: {hour: 0, minute: 0, ampm: null}, end: {hour: 23, minute: 59, ampm: null}}];
            if (!limits) return defaultRange;
            if (!Array.isArray(limits)) limits = [limits];
            var checkStruct = function (item) {
                var result = true;
                result = result && typeof item === "object";
                result = result && item.hasOwnProperty("start");
                result = result && item.hasOwnProperty("end");
                result = result && item.start.hasOwnProperty("hour") && isNaN(item.start.hour) == false;
                result = result && item.start.hasOwnProperty("minute") && isNaN(item.start.minute) == false;
                result = result && item.start.hasOwnProperty("ampm") && (item.start.ampm == "am" || item.start.ampm == "pm" || item.start.ampm == null);
                result = result && item.end.hasOwnProperty("hour") && isNaN(item.end.hour) == false;
                result = result && item.end.hasOwnProperty("minute") && isNaN(item.end.minute) == false;
                result = result && item.end.hasOwnProperty("ampm") && (item.end.ampm == "am" || item.end.ampm == "pm" || item.end.ampm == null);
                return result;
            };
            for (l = 0, len = limits.length; l < len; l++) {
                if (checkStruct(limits[l]) == false) return defaultRange;
            }
            return limits;
        },
        /**
         * Keeps the given date/time inside it's limits
         */
        TimeInsideLimits: function (value, reference) {
            direction = typeof direction == "undefined" ? "static" : direction;
            var limits = this.fixLimits(this.config.limitTimeForDay(value));

            // check if the value is inside any range
            var limitsArray = [];
            for (var l = 0, len = limits.length; l < len; l++) {
                limitsArray[l] = this.convertLimits(limits[l]);
                limitsArray[l].startLimit = value.clone().hour(limitsArray[l].start.hour).minute(limitsArray[l].start.minute);
                limitsArray[l].endLimit = value.clone().hour(limitsArray[l].end.hour).minute(limitsArray[l].end.minute);
                if (value.isBetween(limitsArray[l].startLimit, limitsArray[l].endLimit, null, "[]")) {
                    return value;
                }
            }

            // value isn't inside a range. fix related to direction
            if (reference == "end") {
                // find the nearest higher start value
                for (l = 0; l < len; l++) {
                    if (limitsArray[l].startLimit.isAfter(value)) {
                        return limitsArray[l].startLimit;
                    }
                }
                return limitsArray[0].startLimit;
            } else if (moment.isMoment(reference)) {
                // find the range of the reference
                for (l = 0; l < len; l++) {
                    if (reference.isBetween(limitsArray[l].startLimit, limitsArray[l].endLimit, null, "[]")) {
                        break;
                    }
                }
                if (reference.isAfter(value)) {
                    // moving down
                    return limitsArray[l == 0 ? len - 1 : l - 1].endLimit;
                } else {
                    // moving up
                    return limitsArray[l == len - 1 ? 0 : l + 1].startLimit;
                }
            } else {
                // find the nearest lower end value
                for (l = 0; l < len; l++) {
                    if (limitsArray[l].endLimit.isBefore(value)) {
                        return limitsArray[l].endLimit;
                    }
                }
                return limitsArray[len - 1].endLimit;
            }
        },
        /**
         * Fixes the out of limit styles
         */
        TimePickerOutOfLimitView: function () {
            var startDate, endDate, limits, startLimit, endLimit;
            if (this.config.startDate && this.timepickers) {
                startDate = this.config.startDate.clone();
                limits = this.convertLimits(this.config.limitTimeForDay(startDate.clone()));
                startLimit = startDate.clone().hour(limits.start.hour).minute(limits.start.minute);
                endLimit = startDate.clone().hour(limits.end.hour).minute(limits.end.minute);
                if (startDate.clone().add(1, "hour").isAfter(endLimit, "hour")) {
                    this.timepickers.find(".calentim-timepicker-start .calentim-timepicker-hours .calentim-hour-selected-next").html("&nbsp;");
                }
                if (startDate.clone().add(-1, "hour").isBefore(startLimit, "hour")) {
                    this.timepickers.find(".calentim-timepicker-start .calentim-timepicker-hours .calentim-hour-selected-prev").html("&nbsp;");
                }
                if (startDate.clone().add(1, "minute").isAfter(endLimit, "minute")) {
                    this.timepickers.find(".calentim-timepicker-start .calentim-timepicker-minutes .calentim-minute-selected-next").html("&nbsp;");
                }
                if (startDate.clone().add(-1, "minute").isBefore(startLimit, "minute")) {
                    this.timepickers.find(".calentim-timepicker-start .calentim-timepicker-minutes .calentim-minute-selected-prev").html("&nbsp;");
                }
            }
            if (this.config.endDate && this.timepickers) {
                endDate = this.config.endDate.clone();
                limits = this.convertLimits(this.config.limitTimeForDay(endDate.clone()));
                startLimit = endDate.clone().hour(limits.start.hour).minute(limits.start.minute);
                endLimit = endDate.clone().hour(limits.end.hour).minute(limits.end.minute);
                if (endDate.clone().add(1, "hour").isAfter(endLimit, "hour")) {
                    this.timepickers.find(".calentim-timepicker-end .calentim-timepicker-hours .calentim-hour-selected-next").html("&nbsp;");
                }
                if (endDate.clone().add(-1, "hour").isBefore(startLimit, "hour")) {
                    this.timepickers.find(".calentim-timepicker-end .calentim-timepicker-hours .calentim-hour-selected-prev").html("&nbsp;");
                }
                if (endDate.clone().add(1, "minute").isAfter(endLimit, "minute")) {
                    this.timepickers.find(".calentim-timepicker-end .calentim-timepicker-minutes .calentim-minute-selected-next").html("&nbsp;");
                }
                if (endDate.clone().add(-1, "minute").isBefore(startLimit, "minute")) {
                    this.timepickers.find(".calentim-timepicker-end .calentim-timepicker-minutes .calentim-minute-selected-prev").html("&nbsp;");
                }
            }
        },
        /**
         * Draws the footer of the plugin, which contains range selector links
         *
         * @return void
         */
        drawFooter: function () {
            if (this.config.singleDate === false && this.config.showFooter === true && this.config.showCalendars === true) {
                if (this.config.rangeOrientation === "horizontal" || this.globals.isMobile) {
                    this.input.append("<div class='calentim-ranges'></div>");
                } else {
                    this.input.addClass("calentim-input-vertical-range");
                    this.input.wrapInner("<div class='calentim-left'></div>");
                    $("<div class='calentim-right' style='max-width: " + this.config.verticalRangeWidth + "px; min-width: " + this.config.verticalRangeWidth +
                        "px'><div class='calentim-ranges'></div></div>").insertAfter(this.input.find(".calentim-left"));
                }
                var ranges = this.input.find(".calentim-ranges");
                ranges.append("<span class='calentim-range-header-container'>" + this.config.rangeIcon + "<div class='calentim-range-header'>" + this.config.rangeLabel + "</div></span>");
                for (var range_id in this.config.ranges) {
                    ranges.append("<div class='calentim-range" + ((this.config.ranges[range_id].selected) ? " calentim-range-selected" : "") + "' data-id='" + range_id + "'>" + this.config.ranges[range_id].title + "</div>");
                }
            }
            if (this.globals.isMobile) {
                if (this.config.singleDate === true || this.config.showFooter === false) {
                    this.input.append("<div class='calentim-filler'></div>");
                }
            }
            if ((this.globals.isMobile && (!this.config.inline)) || ((!this.globals.isMobile) && (!this.config.inline) && this.config.showButtons)) {
                if (this.config.rangeOrientation === "horizontal" || this.globals.isMobile) {
                    this.input.append("<div class='calentim-footer'></div>");
                } else {
                    this.input.find(".calentim-right").append("<div class='calentim-footer'></div>");
                }
                this.footer = this.input.find(".calentim-footer");
                this.footer.append("<button type='button' class='calentim-cancel'>" + this.config.cancelLabel + "</button>");
                this.footer.append("<button type='button' class='calentim-apply'>" + this.config.applyLabel + "</button>");
                if ((this.globals.firstValueSelected === false && this.config.startEmpty === true && typeof this.footer !== "undefined") ||
                    (this.globals.isMobile && this.globals.endSelected === false)) {
                    var applyButton = typeof this.footer == "undefined" ? [] : this.footer.find(".calentim-apply");
                    if (applyButton.length > 0) applyButton.attr("disabled", "disabled");
                }
            }
        },
        /**
         * Draws next month's calendar (just calls this.reDrawCalendars with an 1 month incremented currentDate)
         * Used in the next arrow click event
         *
         * @return void
         */
        drawNextMonth: function (event) {
            event = event || window.event;

            if (this.config.hideOutOfRange == true && this.config.maxDate && this.globals.currentDate.clone().add(this.config.calendarCount, "month").isAfter(this.config.maxDate, "month")) {
                return false;
            }

            if (this.globals.swipeTimeout === null) {
                var that = this;
                this.globals.swipeTimeout = setTimeout(function () {
                    if (that.config.onbeforemonthchange(that, that.globals.currentDate ? that.globals.currentDate.clone().startOfMonth() : null, "next") === true) {
                        var buffer = that.calendars.get(0).scrollTop;
                        that.globals.currentDate.middleOfDay().add(1, "month");
                        that.reDrawCalendars();
                        that.calendars.get(0).scrollTop = buffer;
                        that.config.onaftermonthchange(that, that.globals.currentDate ? that.globals.currentDate.clone().startOfMonth() : null);
                    }
                    that.globals.swipeTimeout = null;
                }, event.type == "click" ? 0 : 100);
            }
            this.stopBubbling(event);
        },
        /**
         * Draws previous month's calendar (just calls this.reDrawCalendars with an 1 month decremented currentDate)
         * Used in the prev arrow click event
         *
         * @return void
         */
        drawPrevMonth: function (event) {
            event = event || window.event;

            if (this.config.hideOutOfRange == true && this.config.minDate && this.globals.currentDate.clone().add(-1, "month").isBefore(this.config.minDate, "month")) {
                return false;
            }

            if (this.globals.swipeTimeout === null) {
                var that = this;
                this.globals.swipeTimeout = setTimeout(function () {
                    if (that.config.onbeforemonthchange(that, that.globals.currentDate ? that.globals.currentDate.clone().startOfMonth() : null, "prev") === true) {
                        var buffer = that.calendars.get(0).scrollTop;
                        that.globals.currentDate.middleOfDay().subtract(1, "month");
                        that.reDrawCalendars();
                        that.calendars.get(0).scrollTop = buffer;
                        that.config.onaftermonthchange(that, that.globals.currentDate ? that.globals.currentDate.clone().startOfMonth() : null);
                    }
                    that.globals.swipeTimeout = null;
                }, 100);
            }
            this.stopBubbling(event);
        },
        /**
         * Day cell click event handler
         * @param  [event object] e : The event object which contains the clicked cell in e.target property, which enables us to select dates
         * @return void
         */
        cellClicked: function (e) {
            e = e || window.event;
            e.target = e.target || e.srcElement;

            if ($(e.target).hasClass("calentim-day") === false) e.target = $(e.target).closest(".calentim-day").get(0);
            var cell = $(e.target).data("value");
            var selectedMoment = moment.unix(cell).middleOfDay();
            if (this.config.validateClick(selectedMoment) == false) return false;
            if (this.config.singleDate === false) {
                if (this.globals.startSelected === false) {
                    if (this.config.startDate !== null)
                        this.globals.startDateBackup = this.config.startDate.clone();
                    this.config.startDate = selectedMoment.clone();
                    this.config.endDate = null;
                    this.globals.startSelected = true;
                    this.globals.endSelected = false;
                    this.readTimeFromDisplay(false);
                    // limit time for given date
                    selectedMoment = this.config.startDate.clone();
                    this.config.startDate = this.TimeInsideLimits(this.config.startDate, "start");
                    if (this.config.startDate.isSame(selectedMoment) === false) this.updateTimePickerDisplay();
                    // end limits
                    var applyButton = typeof this.footer == "undefined" ? [] : this.footer.find(".calentim-apply");
                    if (applyButton.length > 0) applyButton.attr("disabled", "disabled");
                    this.config.onfirstselect(this, this.config.startDate.clone());
                } else {
                    if (selectedMoment.isBefore(this.config.startDate)) {
                        var start = this.config.startDate.clone();
                        this.config.startDate = selectedMoment.clone();
                        selectedMoment = start;
                    }
                    if (selectedMoment.diff(this.config.startDate, "day") < this.config.minSelectedDays) {
                        this.globals.startSelected = false;
                        this.fetchInputs();
                    } else {
                        this.globals.startDateBackup = null;
                        this.config.endDate = selectedMoment.clone();
                        this.globals.endSelected = true;
                        this.globals.startSelected = false;
                        this.globals.hoverDate = null;
                        this.readTimeFromDisplay(false);
                        // limit time for given date
                        selectedMoment = this.config.endDate.clone();
                        this.config.endDate = this.TimeInsideLimits(this.config.endDate, "end");
                        if (this.config.endDate.isSame(selectedMoment) === false) this.updateTimePickerDisplay();

                        // end limits
                        if (this.config.onbeforeselect(this, this.config.startDate ? this.config.startDate.clone() : null, this.config.endDate ? this.config.endDate.clone() : null) === true && this.checkRangeContinuity() === true) {
                            this.globals.firstValueSelected = true;
                            this.clearRangeSelection();
                            this.updateInput(true, false);
                        } else this.fetchInputs();
                        if (this.config.autoCloseOnSelect && (this.config.inline === false)) {
                            this.hideDropdown(e);
                        } else {
                            if (typeof this.footer !== "undefined" && this.config.endDate !== null) {
                                this.footer.find(".calentim-apply").removeAttr("disabled");
                            }
                        }
                    }
                }
            } else {
                this.config.startDate = selectedMoment.clone();
                this.config.endDate = this.config.startDate.clone();
                this.globals.endSelected = true;
                this.globals.startSelected = false;
                this.globals.hoverDate = null;
                this.readTimeFromDisplay();
                // limit time for given date
                selectedMoment = this.config.startDate.clone();
                this.config.startDate = this.TimeInsideLimits(this.config.startDate, "start");
                if (this.config.startDate.isSame(selectedMoment) === false) this.updateTimePickerDisplay();
                // end limits
                if (this.config.onbeforeselect(this, this.config.startDate ? this.config.startDate.clone() : null, this.config.endDate ? this.config.endDate.clone() : null) === true) {
                    this.globals.firstValueSelected = true;
                    this.clearRangeSelection();
                    this.updateInput(true, false);
                } else {
                    this.fetchInputs();
                }
                if (this.config.autoCloseOnSelect && (this.config.inline === false)) {
                    this.hideDropdown(e);
                } else {
                    if (typeof this.footer !== "undefined" && this.config.endDate !== null) {
                        this.footer.find(".calentim-apply").removeAttr("disabled");
                    }
                }
            }
            if (this.input.is(":visible")) {
                this.reDrawCells();
                this.updateHeader();
            }
            this.stopBubbling(e);
            return false;
        },
        /**
         * Checks if the defined range is continous (doesn't include disabled ranges or disabled days by callback)
         * @return boolean is continuous or not
         */
        checkRangeContinuity: function () {

            var daysInRange = this.config.endDate.diff(this.config.startDate, "days");

            if (this.config.singleDate || daysInRange == 0) return true;

            var startDate = moment(this.config.startDate).middleOfDay();
            /**
             * variables affecting this:
             * -------------------------
             * config.isHotelBooking
             * config.continuous
             * config.disableOnlyStart
             * config.disableOnlyEnd
             *
             * if disableOnlyStart or disableOnlyEnd is active, skip continuousity.
             * else check continuousity
             *
             */

            if (this.config.disableOnlyStart == true) {
                // if disabling only start is active, just start date check will be sufficient
                // false means continuousity is preserved, true means the date is disabled
                return this.isDisabled(this.config.startDate, this.config.isHotelBooking) === false;
            } else if (this.config.disableOnlyEnd == true) {
                // if disabling only end is active, just end date check will be sufficient
                // false means continuousity is preserved, true means the date is disabled
                return this.isDisabled(this.config.endDate, this.config.isHotelBooking) === false;
            } else {
                var startDateUnix = startDate.middleOfDay().unix();
                //check if startdate can be a start date
                if (
                    // hotel style active, get only disabled.
                    // hotel style passing, get disabled.
                    this.isDisabled(startDateUnix, false) == true &&
                    // if hotel style is active check if start date is a range's start date
                    (this.config.isHotelBooking ? this.getDisabledLevel(startDateUnix) === 1 : true)) {
                    return false;
                }

                if (startDate.isSame(this.config.endDate, "day") == false) {
                    startDate.middleOfDay().add(1, "days");
                    for (var i = 0; i <= daysInRange - 2; i++) {
                        startDateUnix = startDate.middleOfDay().unix();
                        if (this.getDisabledLevel(startDateUnix) !== undefined) return false;
                        startDate.add(1, "days");
                    }
                }
                // check if enddate can be an end date
                startDateUnix = startDate.middleOfDay().unix();
                if (
                    // hotel style active, get only disabled.
                    // hotel style passing, get disabled.
                    this.isDisabled(startDateUnix, false) == true &&
                    // if hotel style is active check if end date is a range's end date
                    (this.config.isHotelBooking ? this.getDisabledLevel(startDateUnix) === 3 : true)) {
                    return false;
                }
            }
            return true;
        },
        /**
         * Checks if given moment value is disabled for that calendar on first draw
         * @param [moment] day : The day to be checked
         * @return {boolean} If the day is disabled or not
         */
        isDisabledOnDraw: function (day) {
            var mday = moment(day).middleOfDay();
            if (this.config.disableDays(mday) === true) {
                return true;
            }
            ;
            for (var rangeIndex = 0; rangeIndex < this.config.disabledRanges.length; rangeIndex++) {
                var range = this.config.disabledRanges[rangeIndex];
                if (mday.isBetween(range.start, range.end, "day", "[]")) {
                    return true;
                }
            }
        },
        /**
         * Checks if given moment value is disabled for that calendar from the disabled array
         * @param [moment] day : The day to be checked
         * @return {boolean} If the day is disabled or not
         */
        isDisabled: function (day, hotelStyle) {
            if (undefined === hotelStyle) hotelStyle = false;
            if (this.config.disableOnlyStart == true && this.globals.startSelected == true) {
                return false;
            } else if (this.config.disableOnlyEnd == true && this.globals.startSelected == false) {
                return false;
            } else {
                if (typeof day == "object" && day !== null) {
                    day = day.clone().middleOfDay().unix();
                }
                if (hotelStyle && this.config.isHotelBooking) {
                    return this.globals.disabledDays[day] === 2;
                }
                return this.globals.disabledDays[day] !== undefined;
            }
        },
        /**
         * Gets the disabledDays record for the given day
         * @param integer|object day
         */
        getDisabledLevel: function (day) {
            if (typeof day == "object" && day !== null) {
                day = day.clone().middleOfDay().unix();
            }
            return this.globals.disabledDays[day];
        },
        /**
         * Event triggered when a day is hovered
         * @param  [event object] e : The event object which contains the hovered cell in e.target property, which enables us to style hovered dates
         * @return void
         */
        cellHovered: function (e) {
            e = e || window.event;
            e.target = e.target || e.srcElement;
            if ($(e.target).hasClass("calentim-day") === false) e.target = $(e.target).closest(".calentim-day").get(0);
            var cell = $(e.target).data("value");
            this.globals.hoverDate = moment.unix(cell).middleOfDay();
            this.globals.keyboardHoverDate = null;
            if (this.globals.startSelected === true) this.reDrawCells();
            this.stopBubbling(e);
        },
        /**
         * Just a calendar refresher to be used with the new variables, updating the calendar view
         * @return void
         */
        reDrawCalendars: function () {
            this.backupTimePickers();
            this.input.empty();
            this.drawUserInterface();
            this.restoreTimePickers();
            this.container.focus();
            /*if (this.globals.lastScrollY !== 0) {
                window.scrollTo(this.globals.lastScrollX, this.globals.lastScrollY);
            }*/
        },
        /**
         * month switcher builder and processor method
         * @return void
         */
        monthSwitchClicked: function () {
            if (this.calendars.find(".calentim-month-selector").length > 0) return;
            var that = this;
            this.calendars.get(0).scrollTop = 0;
            var monthSelector = $("<div class='calentim-month-selector'></div>").appendTo(this.calendars);
            var currentMonth = this.globals.currentDate.get('month');
            for (var m = 0; m < 12; m++) {
                monthSelector.append("<div class='calentim-ms-month" + ((currentMonth == m) ? " current" : "") + "' data-month='" + m + "'>" +
                    (this.config.numericMonthSelector ? (m + 1) : moment({
                        day: 15,
                        hour: 12,
                        month: m
                    }).locale(this.config.locale).format(this.config.monthSwitcherFormat)) +
                    "</div>");
            }
            monthSelector.css("display", "block");
            this.optimizeFontSize(monthSelector.find(".calentim-ms-month"));
            monthSelector.find(".calentim-ms-month").off("click").on("click", function (event) {
                that.globals.currentDate.month($(this).data("month"));
                that.config.onaftermonthchange(that, that.globals.currentDate ? that.globals.currentDate.clone().startOfMonth() : null);
                that.calendars.find(".calentim-month-selector").remove();
                that.reDrawCalendars();
                that.stopBubbling(event);
            });
        },
        /**
         * year switcher builder and processor method
         * @return void
         */
        yearSwitchClicked: function () {
            if (this.calendars.find(".calentim-year-selector").length > 0) return;
            var that = this;
            this.calendars.get(0).scrollTop = 0;
            var yearSelector = $("<div class='calentim-year-selector'></div>").appendTo(this.calendars);
            var currentYear = this.globals.currentDate.get('year');
            yearSelector.append("<div class='calentim-ys-year-prev'><i class='fa fa-angle-double-left'></i></div>");
            yearSelector.data("year", currentYear);
            for (var year = currentYear - 6; year < currentYear + 7; year++) {
                yearSelector.append("<div class='calentim-ys-year" + ((currentYear == year) ? " current" : "") + "' data-year='" + year + "'>" + year + "</div>");
            }

            yearSelector.append("<div class='calentim-ys-year-next'><i class='fa fa-angle-double-right'></i></div>");
            yearSelector.css("display", "block");
            this.optimizeFontSize(yearSelector.find(".calentim-ys-year"));
            $(document).off("click.calentimys").on("click.calentimys", ".calentim-ys-year", function (event) {
                that.globals.currentDate.year($(this).data("year"));
                that.config.onafteryearchange(that, that.globals.currentDate ? that.globals.currentDate.clone().startOf("year") : null);
                that.reDrawCalendars();
                that.calendars.find(".calentim-year-selector").remove();
                if (that.config.DOBCalendar == true) {
                    that.calendars.find(".calentim-calendar").first().find(".calentim-month-switch").click();
                }
                that.stopBubbling(event);
            });
            $(document).off("click.calentimysprev").on("click.calentimysprev", ".calentim-ys-year-prev", function (event) {
                var currentYear = yearSelector.data("year") - 13;
                var currentYearNow = that.globals.currentDate.get('year');
                yearSelector.data("year", currentYear);
                yearSelector.empty();
                yearSelector.append("<div class='calentim-ys-year-prev'><i class='fa fa-angle-double-left'></i></div>");
                for (var year = currentYear - 6; year < currentYear + 7; year++) {
                    yearSelector.append("<div class='calentim-ys-year" + ((currentYearNow == year) ? " current" : "") + "' data-year='" + year + "'>" + year + "</div>");
                }
                yearSelector.append("<div class='calentim-ys-year-next'><i class='fa fa-angle-double-right'></i></div>");
                that.stopBubbling(event);
            });
            $(document).off("click.calentimysnext").on("click.calentimysnext", ".calentim-ys-year-next", function (event) {
                var currentYear = yearSelector.data("year") + 13;
                var currentYearNow = that.globals.currentDate.get('year');
                yearSelector.data("year", currentYear);
                yearSelector.empty();
                yearSelector.append("<div class='calentim-ys-year-prev'><i class='fa fa-angle-double-left'></i></div>");
                for (var year = currentYear - 6; year < currentYear + 7; year++) {
                    yearSelector.append("<div class='calentim-ys-year" + ((currentYearNow == year) ? " current" : "") + "' data-year='" + year + "'>" + year + "</div>");
                }
                yearSelector.append("<div class='calentim-ys-year-next'><i class='fa fa-angle-double-right'></i></div>");
                that.stopBubbling(event);
            });
        },
        /**
         * Lowers the font size until all the text fits in the element
         */
        optimizeFontSize: function (element) {
            element.each(function (index, elem) {
                elem = $(elem);
                elem.wrapInner("<span class='adjust-subject'></span>").prepend("<span class='font-adjuster'>i</span>");
                var adjustSubject = elem.find(".adjust-subject");
                var fontAdjuster = elem.find(".font-adjuster");
                if (adjustSubject.innerHeight() === fontAdjuster.innerHeight()) {
                    fontAdjuster.remove();
                    adjustSubject.contents().unwrap();
                } else {
                    var loopCount = 0;
                    while (adjustSubject.innerHeight() !== fontAdjuster.innerHeight() && loopCount < 16) {
                        var startSize = 0;
                        if (typeof window.getComputedStyle !== "undefined") {
                            startSize = parseFloat(window.getComputedStyle(fontAdjuster.get(0), null).getPropertyValue('font-size'));
                        } else {
                            startSize = parseFloat(fontAdjuster.css("font-size"));
                        }
                        adjustSubject.parent().css("font-size", (startSize - 1) + "px");
                        fontAdjuster.css("font-size", (startSize - 1) + "px");
                        if (startSize < 2) break;
                        loopCount++;
                    }
                    fontAdjuster.remove();
                    adjustSubject.contents().unwrap();
                }
            });
        },
        /**
         * Shows the calentim dropdown
         * @return void
         */
        showDropdown: function (e) {
            var event = e || window.event || jQuery.Event("click", {target: this.elem});
            var eventTarget = event.target || event.srcElement;
            if (((!this.globals.isMobile) && this.container.css("display") == "none") || (this.globals.isMobile && this.input.css("display") == "none")) {
                if (eventTarget !== this.elem) {
                    this.globals.dontHideOnce = true;
                    this.globals.initiator = eventTarget;
                }
                if (this.config.startDate !== null) this.globals.startDateInitial = this.config.startDate.clone();
                if (this.config.endDate !== null) this.globals.endDateInitial = this.config.endDate.clone();
                this.fetchInputs();
                if (this.config.startEmpty === false || this.globals.firstValueSelected) this.globals.currentDate = moment(this.config.startDate);
                if (this.globals.currentDate.isValid() == false) this.globals.currentDate = moment().locale(this.config.locale).middleOfDay();
                this.config.onbeforeshow(this);
                if (this.globals.isMobile) {
                    this.input.css({
                        "display": "flex"
                    });
                    if (!this.config.inline) this.overlay.show();
                    $("body").addClass("calentim-open");
                } else {
                    this.container.css({
                        "display": "block"
                    });
                }
                this.globals.lastScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
                this.reDrawCalendars();
                if (this.config.DOBCalendar == true) {
                    this.calendars.find(".calentim-calendar").first().find(".calentim-year-switch").click();
                }
                this.config.onaftershow(this);
            }
            return false;
        },
        /**
         * Hides the calentim dropdown
         * @return void
         */
        hideDropdown: function (e) {
            var event = e || window.event || jQuery.Event("click", {target: "body"});
            var eventTarget = event.target || event.srcElement;
            if (this.globals.initiator === eventTarget) return;
            if (this.config.inline === false && (((!this.globals.isMobile) && this.container.css("display") !== "none") || (this.globals.isMobile && this.input.css("display") !== "none"))) {
                this.config.onbeforehide(this);
                if (this.globals.isMobile) {
                    this.input.css({
                        "display": "none"
                    });
                    $("body").removeClass("calentim-open");
                    if (!this.config.inline) this.overlay.hide();
                } else {
                    this.container.css({
                        "display": "none"
                    });
                }
                this.globals.hoverDate = null;
                if (this.globals.startDateBackup !== null) {
                    this.config.startDate = this.globals.startDateBackup;
                    this.globals.startSelected = false;
                }
                this.config.onafterhide(this);
            }
            return false;
        },
        /**
         * When only a cell style update is needed, this function is used. This gives us the possibility to change styles without re-drawing the calendars.
         * @return void
         */
        reDrawCells: function () {
            var that = this;
            var startDateUnix = this.config.startDate !== null ? this.config.startDate.clone().middleOfDay().unix() : null;
            var endDateUnix = this.config.endDate !== null ? this.config.endDate.clone().middleOfDay().unix() : null;
            var minDateUnix = this.config.minDate !== null ? this.config.minDate.clone().middleOfDay().unix() : null;
            var maxDateUnix = this.config.maxDate !== null ? this.config.maxDate.clone().middleOfDay().unix() : null;
            var hoverDateUnix = this.globals.hoverDate !== null ? this.globals.hoverDate.clone().middleOfDay().unix() : null;
            var keyboardHoverDateUnix = this.globals.keyboardHoverDate !== null ? this.globals.keyboardHoverDate.clone().middleOfDay().unix() : null;
            var currentDateUnix = moment().middleOfDay().unix();
            this.lastHoverStatus = false;
            for (var c = 0; c < this.config.calendarCount; c++) {
                var calendar = this.calendars.find(".calentim-calendar").eq(c);
                var cells = calendar.find(".calentim-days-container > div").not(".calentim-dayofweek, .calentim-weeknumber");
                var currentMonth = calendar.data("month");
                for (var i = 0; i < cells.length; i++) {
                    var cell = $(cells[i]);
                    var cellDate = parseInt(cell.attr("data-value"));
                    var cellMoment = moment.unix(cellDate).middleOfDay().locale(that.config.locale);
                    var cellStyle = "calentim-day";
                    var cellDay = cellMoment.day();
                    // is weekend day (saturday or sunday) check
                    if (cellDay == 6 || cellDay === 0) cellStyle += " calentim-weekend";
                    // is today check
                    if (cellDate === currentDateUnix) cellStyle += " calentim-today";
                    cellStyle = this.addDisabledStyles(cell, cellMoment, cellDate, cellStyle, minDateUnix, maxDateUnix, currentMonth);
                    cellStyle = this.addSelectedStyles(cellDate, cellStyle, startDateUnix, endDateUnix, minDateUnix, maxDateUnix);
                    cellStyle = this.addHoverStyles(cell, cellDate, cellStyle, this, startDateUnix, hoverDateUnix, keyboardHoverDateUnix);
                    cell.attr("class", cellStyle);
                }
            }
            this.attachEvents();
            this.config.ondraw(this);
        },
        /**
         * returns calculated selected state style of the cell
         * @param cellMoment current cell's day
         * @param cellStyle current cell's already calculated style
         * @return appended style of the cell
         */
        addSelectedStyles: function (cellDateUnix, cellStyle, startDateUnix, endDateUnix, minDateUnix, maxDateUnix) {
            var that = this;
            var cellStyleOriginal = cellStyle;
            if (that.config.startEmpty === false || that.globals.firstValueSelected) {
                // is the start of the range check
                if (that.config.singleDate === false && startDateUnix !== null && startDateUnix === cellDateUnix) cellStyle += " calentim-start";
                // is the end of the range check
                if (that.config.singleDate === false && endDateUnix !== null && endDateUnix === cellDateUnix) cellStyle += " calentim-end";
                // is between the start and the end range check
                if (that.config.singleDate === false && startDateUnix !== null && endDateUnix !== null && cellDateUnix <= endDateUnix && cellDateUnix >= startDateUnix) cellStyle += " calentim-selected";
                // is the selected date of single date picker
                if (that.config.singleDate === true && startDateUnix !== null && startDateUnix === cellDateUnix) cellStyle += " calentim-selected calentim-start calentim-end";
            }

            //if (cellStyleOriginal != cellStyle) { cellStyle = cellStyle.replace("calentim-disabled", "calentim-day"); }

            return cellStyle;
        },
        /**
         * returns calculated hovered state style of the cell
         * @param cellMoment current cell's day
         * @param cellStyle current cell's already calculated style
         * @return appended style of the cell
         */
        addHoverStyles: function (cell, cellDateUnix, cellStyle, ref, startDateUnix, hoverDateUnix, keyboardHoverDateUnix) {
            // hovered date check
            var that = this;
            cellStyle.replace("calentim-hovered", "").replace("calentim-hovered-last", "").replace("calentim-hovered-first", "");
            if (that.globals.startSelected === true && that.globals.endSelected === false && hoverDateUnix !== null) {
                if ((cellDateUnix >= hoverDateUnix && cellDateUnix <= startDateUnix) ||
                    (cellDateUnix <= hoverDateUnix && cellDateUnix >= startDateUnix)) {
                    cellStyle += " calentim-hovered";
                }
            }
            if (that.config.enableKeyboard === true && keyboardHoverDateUnix !== null) {
                if (that.globals.startSelected === false) {
                    if (keyboardHoverDateUnix == cellDateUnix) {
                        cellStyle += " calentim-hovered";
                    }
                } else {
                    if ((cellDateUnix <= startDateUnix && cellDateUnix >= keyboardHoverDateUnix) ||
                        (cellDateUnix >= startDateUnix && cellDateUnix <= keyboardHoverDateUnix)) {
                        cellStyle += " calentim-hovered";
                    }
                }
            }
            if (this.lastHoverStatus === false && cellStyle.indexOf("calentim-hovered") > 0) {
                this.lastHoverStatus = true;
                cellStyle += " calentim-hovered-first";
            }
            if (this.lastHoverStatus === true && cellStyle.indexOf("calentim-hovered") < 0) {
                cell.prev(".calentim-day").addClass("calentim-hovered-last");
                this.lastHoverStatus = false;
            }
            return cellStyle;
        },
        /**
         * returns calculated disabled state style of the cell
         * @param {object}  cell current cell jquery object
         * @param {object}  cellMoment current cell's moment
         * @param {integer} cellDateUnix current call's moment unix timestamp
         * @param {string}  cellStyle current cell's already calculated style
         * @param {integer} minDateUnix minDate config moment unix timestamp
         * @param {integer} maxDateUnix maxDate config moment unix timestamp
         * @return {string} appended style of the cell
         */
        addDisabledStyles: function (cell, cellMoment, cellDateUnix, cellStyle, minDateUnix, maxDateUnix, currentMonth) {
            if (this.isDisabled(cellDateUnix)) {
                if (this.config.isHotelBooking == false) {
                    cellStyle = cellStyle.replace("calentim-day", "calentim-disabled calentim-disabled-range");
                } else {
                    switch (this.globals.disabledDays[cellDateUnix]) {
                        case 1:
                            cellStyle = cellStyle.replace("calentim-day", "calentim-day calentim-disabled-range calentim-disabled-range-start");
                            break;
                        case 2:
                            cellStyle = cellStyle.replace("calentim-day", "calentim-disabled calentim-disabled-range");
                            break;
                        case 3:
                            cellStyle = cellStyle.replace("calentim-day", "calentim-day calentim-disabled-range calentim-disabled-range-end");
                            break;
                    }
                }
            } else if ((maxDateUnix != null && cellDateUnix > maxDateUnix) || (minDateUnix != null && cellDateUnix < minDateUnix)) {
                cellStyle = cellStyle = cellStyle.replace("calentim-day", "calentim-disabled");
            }
            if (cellMoment.month() != currentMonth) {
                cellStyle += " calentim-not-in-month";
            }
            return cellStyle;
        },
        /**
         * Event triggered when a range link is clicked in the footer of the plugin
         * @param   {object} e the clicked range link
         * @return void
         */
        rangeClicked: function (e) {
            e = e || window.event;
            e.target = e.target || e.srcElement;
            if ($(e.target).hasClass("calentim-range") === false) e.target = $(e.target).closest(".calentim-range").get(0);
            if (!e.target.hasAttribute("data-id")) return;
            var range_id = $(e.target).attr("data-id");
            this.globals.currentDate = this.config.ranges[range_id].startDate.clone().locale(this.config.locale);
            this.config.startDate = this.config.ranges[range_id].startDate.clone().locale(this.config.locale);
            this.config.endDate = this.config.ranges[range_id].endDate.clone().locale(this.config.locale);
            this.globals.firstValueSelected = true;
            if (this.checkRangeContinuity() === false) {
                this.fetchInputs();
            } else {
                this.clearRangeSelection();
                this.config.ranges[range_id].selected = true;
                this.updateTimePickerDisplay();
                this.reDrawCalendars();
                this.setViewport();
                this.config.onrangeselect(this, this.config.ranges[range_id]);
                if (this.config.autoCloseOnSelect) this.hideDropdown();
            }
            this.stopBubbling(e);
            return false;
        },
        /**
         * Fixes the view positions of dropdown calendar plugin
         * @return void
         */
        setViewport: function () {
            if (this.globals.isMobile === true) {
                if (this.input.css("display") !== "none") {
                    this.container.trigger("calentim:resize");
                }
            } else {
                if (this.container.css("display") !== "none" && this.globals.initComplete && (this.globals.isMobile === false && this.config.inline === false)) {
                    var result = null;
                    var viewport = this.getViewport();
                    switch (this.config.showOn) {
                        case "top":
                            result = (this.config.autoAlign) ? this.positionOnTopAlign(viewport) : this.positionOnTop(false, viewport);
                            result = this.horizontalAlign(viewport);
                            break;
                        case "left":
                            result = (this.config.autoAlign) ? this.positionOnLeftAlign(viewport) : this.positionOnLeft(false, viewport);
                            result = this.verticalAlign(viewport);
                            break;
                        case "right":
                            result = (this.config.autoAlign) ? this.positionOnRightAlign(viewport) : this.positionOnRight(false, viewport);
                            result = this.verticalAlign(viewport);
                            break;
                        case "bottom":
                            result = (this.config.autoAlign) ? this.positionOnBottomAlign(viewport) : this.positionOnBottom(false, viewport);
                            result = this.horizontalAlign(viewport);
                            break;
                        case "center":
                            result = this.positionOnCenter(viewport);
                            break;
                        default:
                            result = (this.config.autoAlign) ? this.positionOnBottomAlign(viewport) : this.positionOnBottom(false, viewport);
                            result = this.horizontalAlign(viewport);
                            break;
                    }
                }
                if (this.config.rangeOrientation !== "horizontal") {
                    var height = this.input.find(".calentim-header").outerHeight() +
                        this.input.find(".calentim-calendars").outerHeight() +
                        ((this.input.find(".calentim-footer").length > 0) ? this.input.find(".calentim-footer").outerHeight() : 0) +
                        ((this.input.find(".calentim-timepickers").length > 0) ? this.input.find(".calentim-timepickers").outerHeight() : 0);
                    this.input.find(".calentim-right").css("max-height", height);
                }
            }
        },
        /**
         * Gets the coordinates of the dropdown relative to the position
         * @param string position
         */
        getDropdownPos: function (position) {
            var input = this.getDimensions(this.$elem, true);
            var dropdown = this.getDimensions(this.container, true);
            var margin = parseInt(this.input.css("margin-left"), 10);
            var arrow = parseFloat(this.container.find("div[class*='calentim-box-arrow']").first().outerHeight() / 2);
            switch (position) {
                case "left":
                    switch (this.config.arrowOn) {
                        case "top":
                            return {
                                top: input.offsetTop - margin - arrow - (input.height / 2),
                                left: input.offsetLeft - dropdown.width - margin,
                                arrow: 0
                            };
                        case "center":
                            return {
                                top: input.offsetTop - margin - (dropdown.height / 2),
                                left: input.offsetLeft - dropdown.width - margin,
                                arrow: (dropdown.height - (arrow * 2)) / 2 - (input.height / 2)
                            };
                        case "bottom":
                            return {
                                top: input.offsetTop - dropdown.height + input.height + (2 * margin) + arrow,
                                left: input.offsetLeft - dropdown.width - margin,
                                arrow: dropdown.height - (arrow * 4) - (3 * margin) - (input.height / 2)
                            };
                        default:
                            return {
                                top: input.offsetTop - margin - arrow - (input.height / 2),
                                left: input.offsetLeft - dropdown.width - margin,
                                arrow: 0
                            };
                    }
                    break;
                case "right":
                    switch (this.config.arrowOn) {
                        case "top":
                            return {
                                top: input.offsetTop - margin - arrow - (input.height / 2),
                                left: input.offsetLeft + input.width + margin,
                                arrow: 0
                            };
                        case "center":
                            return {
                                top: input.offsetTop - margin - (dropdown.height / 2),
                                left: input.offsetLeft + input.width + margin,
                                arrow: (dropdown.height - (arrow * 2)) / 2 - (input.height / 2)
                            };
                        case "bottom":
                            return {
                                top: input.offsetTop - dropdown.height + input.height + (2 * margin) + arrow,
                                left: input.offsetLeft + input.width + margin,
                                arrow: dropdown.height - (arrow * 4) - (3 * margin) - (input.height / 2)
                            };
                        default:
                            return {
                                top: input.offsetTop - margin - arrow - (input.height / 2),
                                left: input.offsetLeft + input.width + margin,
                                arrow: 0
                            };
                    }
                    break;
                case "top":
                    switch (this.config.arrowOn) {
                        case "left":
                            return {
                                top: input.offsetTop - dropdown.height - margin,
                                left: input.offsetLeft - margin,
                                arrow: 0
                            };
                        case "center":
                            return {
                                top: input.offsetTop - dropdown.height - margin,
                                left: input.offsetLeft - ((dropdown.width - (margin * 2) - input.width) / 2),
                                arrow: (dropdown.width - (arrow * 5)) / 2
                            };
                        case "right":
                            return {
                                top: input.offsetTop - dropdown.height - margin,
                                left: input.offsetLeft - (dropdown.width - input.width) + margin,
                                arrow: dropdown.width - (5 * arrow) + margin
                            };
                        default:
                            return {
                                top: input.offsetTop - dropdown.height - margin,
                                left: input.offsetLeft - margin,
                                arrow: 0
                            };
                    }
                    break;
                case "bottom":
                    switch (this.config.arrowOn) {
                        case "left":
                            return {
                                top: input.offsetTop + input.height - margin + arrow,
                                left: input.offsetLeft - margin,
                                arrow: 0
                            };
                        case "center":
                            return {
                                top: input.offsetTop + input.height - margin + arrow,
                                left: input.offsetLeft - ((dropdown.width - (margin * 2) - input.width) / 2),
                                arrow: (dropdown.width - (arrow * 5)) / 2
                            };
                        case "right":
                            return {
                                top: input.offsetTop + input.height - margin + arrow,
                                left: input.offsetLeft - (dropdown.width - input.width) + margin,
                                arrow: dropdown.width - (5 * arrow) + margin
                            };
                        default:
                            return {
                                top: input.offsetTop + input.height - margin + arrow,
                                left: input.offsetLeft - margin,
                                arrow: 0
                            };
                    }
                    break;
                case "center":
                    switch (this.config.arrowOn) {
                        case "center":
                            return {
                                top: input.offsetTop - margin - (dropdown.height / 2),
                                left: input.offsetLeft - ((dropdown.width - (margin * 2) - input.width) / 2)
                            };
                    }
                    break;
            }
        },
        /**
         * Vertically aligns the dropdown when the viewport changes
         * @param {object} viewport An object containing the current viewport dimensions
         */
        verticalAlign: function (viewport) {
            var dropdown = this.getDimensions(this.container, true),
                start_difference = viewport.top - dropdown.offsetTop,
                end_difference = dropdown.offsetTop + dropdown.height - viewport.bottom;

            if (start_difference > 0 && Math.abs(start_difference) < dropdown.height) {
                this.container.css({
                    top: function () {
                        return parseFloat($(this).css("top").replace(/px$/, "")) + start_difference;
                    }
                });
                this.container.find("div[class*='calentim-box-arrow-']").css({
                    top: function () {
                        return parseFloat($(this).css("top").replace(/px$/, "")) - start_difference;
                    }
                });
            } else if (end_difference > 0 && Math.abs(end_difference) < dropdown.height) {
                this.container.css({
                    top: function () {
                        return parseFloat($(this).css("top").replace(/px$/, "")) - end_difference;
                    }
                });
                this.container.find("div[class*='calentim-box-arrow-']").css({
                    top: function () {
                        return parseFloat($(this).css("top").replace(/px$/, "")) + end_difference;
                    }
                });
            }
        },
        /**
         * Horizontally aligns the dropdown when the viewport changes
         * @param {object} viewport An object containing the current viewport dimensions
         */
        horizontalAlign: function (viewport) {
            var dropdown = this.getDimensions(this.container, true),
                difference = dropdown.offsetLeft + dropdown.width - viewport.right;
            if (difference > 0 && Math.abs(difference) < dropdown.width) {
                this.container.css({
                    left: function () {
                        return parseFloat($(this).css("left").replace(/px$/, "")) - difference;
                    }
                });
                this.container.find("div[class*='calentim-box-arrow-']").css({
                    left: function () {
                        return parseFloat($(this).css("left").replace(/px$/, "")) + difference;
                    }
                });
            }
        },
        /**
         * Moves the plugin dropdown relative to the input or return the calculated areas
         * @param               {boolean}    returnValues whether the method should apply the CSS or return the calculated values
         * @param               {object}     viewport the current viewport boundaries, top, right, bottom, left in pixels
         * @returns             {object}     if returnValues is set to true, it returns the calculated positions
         */
        positionOnTop: function (returnValues, viewport) {
            var setting = this.getDropdownPos("top");
            if (!returnValues) {
                this.container.css({left: setting.left, top: setting.top});
                this.container.find("div[class*='calentim-box-arrow-']").css({left: setting.arrow}).attr("class", "calentim-box-arrow-bottom");
            } else {
                return setting;
            }
        },
        /**
         * Moves the plugin dropdown relative to the input or return the calculated areas
         * @param               {boolean}    returnValues whether the method should apply the CSS or return the calculated values
         * @param               {object}     viewport the current viewport boundaries, top, right, bottom, left in pixels
         * @returns             {object}     if returnValues is set to true, it returns the calculated positions
         */
        positionOnBottom: function (returnValues, viewport) {
            var setting = this.getDropdownPos("bottom");
            if (!returnValues) {
                this.container.css({left: setting.left, top: setting.top});
                this.container.find("div[class*='calentim-box-arrow-']").attr("class", "calentim-box-arrow-top").css({left: setting.arrow});
            } else {
                return setting;
            }
        },
        /**
         * Moves the plugin dropdown relative to the input or return the calculated areas
         * @param               {boolean}    returnValues whether the method should apply the CSS or return the calculated values
         * @param               {object}     viewport the current viewport boundaries, top, right, bottom, left in pixels
         * @returns             {object}     if returnValues is set to true, it returns the calculated positions
         */
        positionOnLeft: function (returnValues, viewport) {
            var setting = this.getDropdownPos("left");
            if (!returnValues) {
                this.container.css({left: setting.left, top: setting.top + 11});
                this.container.children("div[class*='calentim-box-arrow-']").attr("class", "calentim-box-arrow-right").css({top: setting.arrow});
            } else {
                return setting;
            }
        },
        /**
         * Moves the plugin dropdown relative to the input or return the calculated areas
         * @param               {boolean}    returnValues whether the method should apply the CSS or return the calculated values
         * @param               {object}     viewport the current viewport boundaries, top, right, bottom, left in pixels
         * @returns             {object}     if returnValues is set to true, it returns the calculated positions
         */
        positionOnRight: function (returnValues, viewport) {
            var setting = this.getDropdownPos("right");
            if (!returnValues) {
                this.container.css({left: setting.left, top: setting.top + 11});
                this.container.children("div[class*='calentim-box-arrow-']").attr("class", "calentim-box-arrow-left").css({top: setting.arrow});
            } else {
                return setting;
            }
        },
        /**
         * Moves the plugin dropdown relative to the input
         * @param               {object}     viewport the current viewport boundaries, top, right, bottom, left in pixels
         * @returns             {object}
         */
        positionOnCenter: function (viewport) {
            var setting = this.getDropdownPos("center");
            var offsetX = Math.max((setting.left + this.container[0].clientWidth) - (viewport.right - 30), 0);
            var offsetY = Math.max((setting.top + this.container[0].clientHeight) - (viewport.bottom - 30), 0);
            if (!this.config.autoAlign) {
                offsetX = 0;
                offsetY = 0;
            }
            setting.left -= offsetX;
            setting.top -= offsetY;
            this.container.css({left: setting.left, top: setting.top});
            this.container.find("div[class*='calentim-box-arrow-']").remove();
        },
        /**
         * Position the plugin dropdown relative to the input or return the calculated areas, and fixes if any overflow occurs
         */
        positionOnBottomAlign: function (viewport) {
            var standardPosition = this.positionOnBottom(true, viewport);
            var dropdown = this.getDimensions(this.container);
            if (standardPosition.top + dropdown.height < viewport.bottom) {
                this.positionOnBottom(false, viewport);
            } else {
                this.positionOnTop(false, viewport);
            }
        },
        /**
         * Position the plugin dropdown relative to the input or return the calculated areas, and fixes if any overflow occurs
         */
        positionOnLeftAlign: function (viewport) {
            var standardPosition = this.positionOnLeft(true, viewport);
            if (standardPosition.left > viewport.left - 50) {
                this.positionOnLeft(false, viewport);
            } else {
                this.positionOnRight(false, viewport);
            }
        },
        /**
         * Position the plugin dropdown relative to the input or return the calculated areas, and fixes if any overflow occurs
         */
        positionOnRightAlign: function (viewport) {
            var standardPosition = this.positionOnRight(true, viewport);
            var dropdown = this.getDimensions(this.container);
            if (standardPosition.left + dropdown.width < viewport.right + 50) {
                this.positionOnRight(false, viewport);
            } else {
                this.positionOnLeft(false, viewport);
            }
        },
        /**
         * Position the plugin dropdown relative to the input or return the calculated areas, and fixes if any overflow occurs
         */
        positionOnTopAlign: function (viewport) {
            var standardPosition = this.positionOnTop(true, viewport);
            if (standardPosition.top > viewport.top) {
                this.positionOnTop(false, viewport);
            } else {
                this.positionOnBottom(false, viewport);
            }
        },
        /**
         * Helper method for getting an element's inner/outer dimensions and positions
         * @param  {element}     elem  The element whose dimensions and position are wanted
         * @param  {boolean}     outer true/false variable which tells the method to return inner(false) or outer(true) dimensions
         * @return {object}      an user defined object which contains the width and height of the element and top and left positions relative to the viewport
         */
        getDimensions: function (element, outer) {
            var doc = document, win = window, body = doc.body, elem = element[0], that = this, off = element.offset();
            if (element === this.$elem && this.globals.parentScrollEventsAttached === false) {
                // give each scroll parent a callback when they'll run on scrolling
                var scrollParent = $.proxy(function () {
                    // dont run while it's already running
                    if (!this.globals.isTicking) {
                        this.globals.isTicking = true;
                        // rAF technique implementation
                        this.globals.rafID = this.requestAnimFrame($.proxy(function () {
                            this.setViewport();
                            this.cancelAnimFrame(this.globals.rafID);
                            this.globals.isTicking = false;
                        }, this));
                    }
                }, this);

                // find the scrollable parents
                if (elem !== body) {
                    var parent = elem.parentNode;
                    while (parent !== body && parent !== null) {
                        // if the parent is scrollable
                        if (parent.scrollHeight > parent.offsetHeight) {
                            // attach the scroll event
                            $(parent).off("scroll.calentim").on("scroll.calentim", scrollParent);
                        }
                        // switch to next parent
                        parent = parent.parentNode;
                    }
                }

                // don't attach again once attached.
                this.globals.parentScrollEventsAttached = true;
            }

            // now return the dimensions
            return {
                width: elem.offsetWidth,
                height: elem.offsetHeight,
                offsetLeft: off.left,
                offsetTop: off.top
            };
        },
        /**
         * Helper method for getting the window viewport
         * @return {object}     an user defined object which contains the rectangular position and dimensions of the viewport
         */
        getViewport: function () {
            var top = this.globals.lastScrollY, left = this.globals.lastScrollX, bottom = top + window.innerHeight,
                right = left + window.innerWidth;
            return {top: top, left: left, right: right, bottom: bottom};
        },
        /**
         * Attaches the related events on the elements after render/update
         * @return void
         */
        attachEvents: function () {
            var clickNextEvent = $.proxy(this.drawNextMonth, this);
            var clickPrevEvent = $.proxy(this.drawPrevMonth, this);
            var clickCellEvent = $.proxy(this.cellClicked, this);
            var hoverCellEvent = $.proxy(this.cellHovered, this);
            var rangeClickedEvent = $.proxy(this.rangeClicked, this);
            var monthSwitchClickEvent = $.proxy(this.monthSwitchClicked, this);
            var yearSwitchClickEvent = $.proxy(this.yearSwitchClicked, this);
            var clickEvent = "click.calentim";
            this.container.find(".calentim-next").off(clickEvent).one(clickEvent, clickNextEvent);
            this.container.find(".calentim-prev").off(clickEvent).one(clickEvent, clickPrevEvent);
            this.container.find(".calentim-day").off(clickEvent).on(clickEvent, clickCellEvent);
            this.container.find(".calentim-day").off("mouseover.calentim").on("mouseover.calentim", hoverCellEvent);
            this.container.find(".calentim-disabled").not(".calentim-day").off(clickEvent);
            this.container.find(".calentim-range").off(clickEvent).on(clickEvent, rangeClickedEvent);
            this.container.find(".calentim-month-switch ").off(clickEvent).on(clickEvent, monthSwitchClickEvent);
            this.container.find(".calentim-year-switch ").off(clickEvent).on(clickEvent, yearSwitchClickEvent);

            if (this.globals.isMobile === true && this.config.enableSwipe == true) {
                // check if jQuery Mobile is loaded
                if (typeof $.fn.swiperight === "function") {
                    this.input.find(".calentim-calendars").css("touch-action", "none");
                    this.input.find(".calentim-calendars").on("swipeleft", clickNextEvent);
                    this.input.find(".calentim-calendars").on("swiperight", clickPrevEvent);
                } else {
                    var hammer = new Hammer(this.input.find(".calentim-calendars").get(0));
                    hammer.off("swipeleft").on("swipeleft", clickNextEvent);
                    hammer.off("swiperight").on("swiperight", clickPrevEvent);
                }
            }

            if ((this.globals.isMobile || this.config.showButtons) && (!this.config.inline)) {
                // cancel button click event
                this.input.find(".calentim-cancel").off("click.calentim").on("click.calentim", $.proxy(function (event) {
                    if (this.config.onCancel(this, this.config.startDate, this.config.endDate) == true) {
                        this.config.startDate = (this.globals.startDateInitial) ? this.globals.startDateInitial.clone() : null;
                        this.config.endDate = (this.globals.endDateInitial) ? this.globals.endDateInitial.clone() : null;
                        if (this.config.startEmpty && (!this.globals.startDateInitial)) {
                            // clear input
                            this.clearInput();
                        }
                        this.updateTimePickerDisplay();
                        this.updateInput(false, false);
                        this.hideDropdown(event);
                    }
                }, this));

                // apply button click event
                this.input.find(".calentim-apply").off("click.calentim").on("click.calentim", $.proxy(function (event) {
                    this.config.startDate = this.config.startDate || moment();
                    this.config.endDate = this.config.endDate || moment();
                    if (this.config.onbeforeselect(this, this.config.startDate.clone(), this.config.endDate.clone()) === true && this.checkRangeContinuity() === true) {
                        this.globals.firstValueSelected = true;
                        if (this.globals.delayInputUpdate) {
                            this.globals.delayInputUpdate = false;
                            this.updateInput(true, false);
                            this.clearRangeSelection();
                            this.globals.delayInputUpdate = true;
                        } else {
                            this.updateInput(true, false);
                        }
                    } else {
                        this.fetchInputs();
                    }
                    this.hideDropdown(event);
                }, this));
            }
        },
        /**
         * Events per instance
         */
        addInitialEvents: function () {
            // buffer current scope
            var that = this;

            // create namespaced event name
            var eventClick = "click.calentim";

            // create a unique document event name because multiple instances may overlap each other
            this.globals.documentEvent = eventClick + "_" + Math.round(new Date().getTime() + (Math.random() * 100));

            // create a instance specific unique document click event, which will be used to hide the dropdown
            $(document).on(this.globals.documentEvent, $.proxy(function (e) {
                if (this.globals.isMobile === false && this.config.inline === false) {
                    var event = e || window.event || jQuery.Event("click", {target: "body"});
                    var eventTarget = event.target || event.srcElement;
                    if ($(this.container).find($(eventTarget)).length === 0 &&
                        this.elem !== eventTarget && this.container.is(":visible") > 0) {
                        this.hideDropdown(event);
                    }
                }
            }, this));

            // if the keyboard interaction is enabled, redefine the click event
            if (this.config.enableKeyboard) eventClick = "click.calentim focus.calentim";

            // prepare the input click + focus event which will open the dropdown
            this.$elem.off(eventClick).on(eventClick, $.proxy(this.debounce(function (e) {
                var event = e || window.event || jQuery.Event("click", {target: "body"});
                var eventTarget = event.target || event.srcElement;
                if (this.input.get(0).clientHeight > 0 && this.config.target.get(0) !== eventTarget) {
                    this.hideDropdown(event);
                } else {
                    $(document).trigger("click");
                    this.showDropdown(event);
                }
            }, 200, true), this));

            // on mobile screens, add an event to restyle the modal when a layout change occurs
            if (this.globals.isMobile) {
                $(window).on("resize.calentim", $.proxy(function (e) {
                    this.container.trigger("calentim:resize");
                }, this));
            }


            this.container.on("calentim:resize", $.proxy(function () {
                this.globals.rafID = this.requestAnimFrame(function () {
                    if (that.config.showCalendars) {
                        var oneCalendarHeight = that.input.find(".calentim-calendar:visible:first").innerHeight();
                        that.input.removeClass("calentim-input-top-reset");
                        if (that.input.position().top < 0) that.input.addClass("calentim-input-top-reset");
                        if ($(window).width() > $(window).height()) {
                            // landscape mode
                            that.input.find(".calentim-calendars").css({
                                maxHeight: 99999,
                                minHeight: oneCalendarHeight
                            });
                            if (that.input.css("display") === "flex") {
                                if (that.input.find(".calentim-header:visible").length > 0)
                                    that.input.css("height", (oneCalendarHeight + that.input.find(".calentim-header").outerHeight() + 2) + "px");
                                else
                                    that.input.css("height", (oneCalendarHeight + 2) + "px");
                            }
                        } else {
                            // portrait mode
                            that.input.css("height", "auto");
                            that.input.find(".calentim-calendars").css({
                                maxHeight: oneCalendarHeight,
                                minHeight: 0
                            });
                        }
                    } else {
                        that.input.css("height", "auto");
                    }

                    that.updateTimePickerDisplay();
                    that.cancelAnimFrame(that.globals.rafID);
                });
            }, this));

            // run the event once if the environment is mobile and (possibly) display is inline
            if (this.input.css("display") !== "none" && this.globals.isMobile) this.container.trigger("calentim:resize");

            // append the desktop layout refreshing event
            if (this.globals.isMobile === false) {
                $(window).on("resize.calentim scroll.calentim", function () {
                    // dont run while it's already running
                    if (!that.globals.isTicking) {
                        that.globals.isTicking = true;
                        // rAF technique implementation
                        that.globals.lastScrollX = window.scrollX || window.pageXOffset || document.documentElement.scrollLeft;
                        that.globals.lastScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
                        that.globals.rafID = that.requestAnimFrame($.proxy(function () {
                            this.setViewport();
                            this.globals.isTicking = false;
                            this.cancelAnimFrame(this.globals.rafID);
                        }, that));
                    }
                });
            }
        },
        /**
         * cross browser event bubbling (propagation) prevention handler
         * @return void
         */
        stopBubbling: function (e) {
            if (typeof e.stopPropagation === "function") {
                e.stopPropagation();
            } else if (typeof e.cancelBubble !== "undefined") {
                e.cancelBubble = true;
            }
            if (typeof e.preventDefault === "function") {
                e.preventDefault();
            }
            e.returnValue = false;
            return false;
        },
        /**
         * Delays a multiple triggered method execution after the last one has been triggered
         * @return [function] given callback execution promise/result
         */
        debounce: function (func, wait, immediate) {
            return function () {
                var context = this, args = arguments;
                var later = function () {
                    context.globals.throttleTimeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && (!context.globals.throttleTimeout);
                clearTimeout(context.globals.throttleTimeout);
                context.globals.throttleTimeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        },
        /**
         * javascript rAF implementation for cross browser compatibility
         */
        requestAnimFrame: function (callback) {
            if (typeof window.requestAnimationFrame === "function") return requestAnimationFrame(callback);
            if (typeof window.webkitRequestAnimationFrame === "function") return webkitRequestAnimationFrame(callback);
            if (typeof window.mozRequestAnimationFrame === "function") return mozRequestAnimationFrame(callback);
            return setTimeout(callback, 100 / 6);
        },
        /**
         * javascript cAF implementation for cross browser compatibility
         */
        cancelAnimFrame: function (id) {
            if (typeof window.cancelAnimationFrame === "function") return cancelAnimationFrame(id);
            if (typeof window.webkitCancelAnimationFrame === "function") return webkitCancelAnimationFrame(id);
            if (typeof window.mozCancelAnimationFrame === "function") return mozCancelAnimationFrame(id);
            return clearTimeout(id);
        },
        /**
         * Attaches keyboard events if enabled
         * @return void
         */
        addKeyboardEvents: function () {
            if (this.config.enableKeyboard && this.config.showCalendars) {
                var keyDownEvent = $.proxy(function (event) {
                    var keycode = (event.which) ? event.which : event.keyCode;
                    if (this.globals.keyboardHoverDate === null) {
                        if (this.config.startDate === null) {
                            this.globals.keyboardHoverDate = moment({
                                day: 1,
                                month: this.calendars.first().data("month")
                            }).middleOfDay();
                        } else {
                            this.globals.keyboardHoverDate = this.config.startDate.clone().middleOfDay();
                        }
                    } else {
                        this.globals.keyboardHoverDate.middleOfDay();
                    }
                    var shouldReDraw = false, shouldPrevent = false;
                    switch (keycode) {
                        case 37: // left
                            this.globals.keyboardHoverDate.add(-1, "day");
                            shouldReDraw = true;
                            shouldPrevent = true;
                            break;
                        case 38: // top
                            this.globals.keyboardHoverDate.add(-1, "week");
                            shouldReDraw = true;
                            shouldPrevent = true;
                            break;
                        case 39: // right
                            this.globals.keyboardHoverDate.add(1, "day");
                            shouldReDraw = true;
                            shouldPrevent = true;
                            break;
                        case 40: // bottom
                            this.globals.keyboardHoverDate.add(1, "week");
                            shouldReDraw = true;
                            shouldPrevent = true;
                            break;
                        case 32: // space
                            this.input.find(".calentim-day[data-value='" + this.globals.keyboardHoverDate.middleOfDay().unix() + "']").first().trigger("click.calentim");
                            shouldReDraw = false;
                            shouldPrevent = true;
                            break;
                        case 33: // page up
                            if (event.shiftKey) {
                                this.globals.keyboardHoverDate.add(-1, "years");
                            } else {
                                this.globals.keyboardHoverDate.add(-1, "months");
                            }
                            shouldReDraw = true;
                            shouldPrevent = true;
                            break;
                        case 34: // page down
                            if (event.shiftKey) {
                                this.globals.keyboardHoverDate.add(1, "years");
                            } else {
                                this.globals.keyboardHoverDate.add(1, "months");
                            }
                            shouldReDraw = true;
                            shouldPrevent = true;
                            break;
                        case 27: // esc
                            this.hideDropdown(event);
                            break;
                        case 36: // home
                            if (event.shiftKey) {
                                this.globals.keyboardHoverDate = moment().middleOfDay();
                                shouldReDraw = true;
                                shouldPrevent = true;
                            }
                            break;
                    }
                    if (shouldReDraw || shouldPrevent) {
                        this.globals.keyboardHoverDate = this.globals.keyboardHoverDate.middleOfDay();
                        if (this.globals.keyboardHoverDate.isBefore(moment.unix(this.input.find(".calentim-day:first").attr('data-value')), "minute") ||
                            this.globals.keyboardHoverDate.isAfter(moment.unix(this.input.find(".calentim-day:last").attr('data-value')), "minute")) {
                            this.globals.currentDate = this.globals.keyboardHoverDate.clone().startOfMonth();
                            this.reDrawCalendars();
                            shouldReDraw = false;
                        }
                        if (shouldReDraw) {
                            this.globals.hoverDate = null;
                            this.reDrawCells();
                        }
                        if (shouldPrevent) this.stopBubbling(event);
                        // refresh focus on the container
                        this.container.find(".calentim-calendars").focus();

                        return false;
                    }
                }, this);
                var hourKeyDownEvent = function (event) {
                    var keycode = (event.which) ? event.which : event.keyCode;
                    var target = event.target || event.currentTarget;
                    switch (keycode) {
                        case 38: // top
                            $(target).siblings(".calentim-timepicker-hour-arrows").find(".calentim-timepicker-hours-up").click();
                            return false;
                        case 40: // bottom
                            $(target).siblings(".calentim-timepicker-hour-arrows").find(".calentim-timepicker-hours-down").click();
                            return false;
                    }
                    return true;
                };
                var minuteKeyDownEvent = function (event) {
                    var keycode = (event.which) ? event.which : event.keyCode;
                    var target = event.target || event.currentTarget;
                    switch (keycode) {
                        case 38: // top
                            $(target).siblings(".calentim-timepicker-minute-arrows").find(".calentim-timepicker-minutes-up").click();
                            return false;
                        case 40: // bottom
                            $(target).siblings(".calentim-timepicker-minute-arrows").find(".calentim-timepicker-minutes-down").click();
                            return false;
                    }
                    return true;
                };
                var ampmKeyDownEvent = function (event) {
                    var keycode = (event.which) ? event.which : event.keyCode;
                    var target = event.target || event.currentTarget;
                    var isEndPicker = $(target).parent().hasClass("calentim-timepicker-end");
                    switch (keycode) {
                        case 38: // top
                        case 40: // bottom
                            $(target).children(":not(.calentim-ampm-selected)").click();
                            return false;
                        case 9:
                            if (isEndPicker && event.shiftKey == false) {
                                var instance = $(target).closest(".calentim-container").data("calentim");
                                if (instance) {
                                    instance.globals.skipTabKeyOnInput = true;
                                    instance.hideDropdown();
                                    instance.$elem.focus().trigger($.Event("keydown.calentim", {keyCode: 9, which: 9}));
                                }
                            }
                    }
                    return true;
                };
                this.$elem.off("keydown.calentim").on("keydown.calentim", $.proxy(function (event) {
                    var keycode = (event.which) ? event.which : event.keyCode;
                    if (keycode == 9 && event.shiftKey == false && this.globals.skipTabKeyOnInput == false) {
                        this.container.find(".calentim-calendars").focus();
                        return false;
                    } else if (keycode == 9 && event.shiftKey == false) {
                        this.globals.skipTabKeyOnInput = false;
                    }
                    return true;
                }, this));
                this.container.find(".calentim-calendars").off("keydown.calentim").on("keydown.calentim", keyDownEvent);
                this.timepickers.find(".calentim-timepicker-ampm").off("keydown.calentim").on("keydown.calentim", ampmKeyDownEvent);
                this.timepickers.find(".calentim-timepicker-minutes-wrapper").off("keydown.calentim").on("keydown.calentim", minuteKeyDownEvent);
                this.timepickers.find(".calentim-timepicker-hours-wrapper").off("keydown.calentim").on("keydown.calentim", hourKeyDownEvent);
            }
        },
        /**
         * Destroys the instance
         */
        destroy: function () {
            if (this.config.onBeforeDestroy(this)) {
                if (this.config.inline) {
                    this.input.remove();
                    if (this.globals.isMobile)
                        this.$elem.unwrap(".calentim-container-mobile");
                    else
                        this.$elem.unwrap(".calentim-container");
                    this.elem.type = 'text';
                } else {
                    this.container.remove();
                }
                $(document).off(this.globals.documentEvent);
                this.$elem.removeData("calentim");
                this.config.ondestroy(this);
            }
        },
        /**
         * Converts the given datetime variable to momentjs object
         * @param {mixed} datetime the datetime variable to convert to moment object
         * @return {momentobject} the converted variable
         */
        fixDateTime: function (datetime) {
            if (datetime != null && moment.isMoment(datetime) == false) {
                if (typeof datetime === "string") {
                    datetime = moment(datetime, this.config.format).locale(this.config.locale);
                } else {
                    datetime = moment(datetime).locale(this.config.locale);
                }
            }
            return datetime;
        },
        /**
         * Code from http://detectmobilebrowser.com/
         * Detects if the browser is mobile
         * @return {boolean} if the browser is mobile or not
         */
        checkMobile: function () {
            return window.matchMedia("only screen and (max-width: " + this.config.mobileBreakpoint + "px)").matches;
        },
        /**
         * Code from https://stackoverflow.com/a/4819886/916000
         * Detects if the device is touch-enabled
         * @return {boolean} if the device is touch enabled or not
         */
        checkTouch: function () {
            var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
            var mq = function (query) {
                return window.matchMedia(query).matches;
            };

            if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
                return true;
            }

            // include the 'heartz' as a way to have a non matching MQ to help terminate the join
            // https://git.io/vznFH
            var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
            return mq(query);
        },
        /**
         * set start date & time programmatically
         * @param {moment object | js Date object | ISO Datetime string} datetime the value to be set
         */
        setStart: function (datetime) {
            var datetimeConverted = this.fixDateTime(datetime);
            if (this.isDisabled(datetimeConverted) === false && moment(datetimeConverted).isValid()) {
                this.config.startDate = moment(datetimeConverted);
                if (this.config.singleDate)
                    this.config.endDate = moment(datetimeConverted);
                this.refreshValues();
            }
        },
        /**
         * set end date & time programmatically
         * @param {moment object | js Date object | ISO Datetime string} datetime the value to be set
         */
        setEnd: function (datetime) {
            var datetimeConverted = this.fixDateTime(datetime);
            if (this.isDisabled(datetimeConverted) === false && moment(datetimeConverted).isValid()) {
                this.config.endDate = moment(datetimeConverted);
                this.refreshValues();
            }
        },
        /**
         * set datetime
         */
        setStartEndDatetime: function (startDate, endDate) {
            var startDatetimeConverted = this.fixDateTime(startDate);
            var endDatetimeConverted = this.fixDateTime(endDate);
            if (this.isDisabled(startDatetimeConverted) === false && moment(startDatetimeConverted).isValid() && this.isDisabled(endDatetimeConverted) === false && moment(endDatetimeConverted).isValid()) {
                this.config.startDate = startDatetimeConverted;
                this.config.endDate = endDatetimeConverted;
                this.refreshValues();
            }
        },
        /**
         * set min date & time programmatically
         * @param {moment object | js Date object | ISO Datetime string} datetime the value to be set
         */
        setMinDate: function (datetime) {
            var datetimeConverted = this.fixDateTime(datetime);
            if (moment(datetimeConverted).isValid()) {
                this.config.minDate = moment(datetimeConverted);
                this.refreshValues();
            }
        },
        /**
         * set max date & time programmatically
         * @param {moment object | js Date object | ISO Datetime string} datetime the value to be set
         */
        setMaxDate: function (datetime) {
            var datetimeConverted = this.fixDateTime(datetime);
            if (moment(datetimeConverted).isValid()) {
                this.config.maxDate = moment(datetimeConverted);
                this.refreshValues();
            }
        },
        /**
         * Sets the displayed month and year
         * @param {moment object | js Date object | ISO Datetime string} datetime the value to be set
         */
        setDisplayDate: function (datetime) {
            var datetimeConverted = this.fixDateTime(datetime);
            if (moment(datetimeConverted).isValid()) {
                this.globals.currentDate = moment(datetimeConverted);
                this.reDrawCalendars();
            }
        },
        /**
         * private method to reset the startdate and enddate to the input
         * @return void
         */
        refreshValues: function () {
            var backup = this.globals.delayInputUpdate;
            this.globals.delayInputUpdate = false;
            this.config.startDate;
            this.config.endDate;
            this.validateDates();
            this.updateTimePickerDisplay();
            this.updateInput();
            this.globals.delayInputUpdate = backup;
            this.reDrawCells();
        }
    };
    calentim.defaults = calentim.prototype.defaults;
    /**
     * The main handler of calentim plugin
     * @param   {object}    options javascript object which contains element specific or range specific options
     * @return {calentim}  plugin reference
     */
    $.fn.calentim = function (options) {
        return this.each(function () {
            if ($(this).data("calentim") == null) {
                new calentim(this, options).init();
            }
        });
    };

    /**
     * add middleOfDay and startOfMonth methods to moment.js to set 12:00:00 for the current moment and return the first day of the month
     * @return {object} modified momentjs instance.
     */
    if (typeof moment.fn.middleOfDay !== "function") {
        moment.fn.middleOfDay = function () {
            this.hours(12).minutes(0).seconds(0);
            return this;
        };
        moment.fn.startOfMonth = function () {
            this.middleOfDay().date(1);
            return this;
        };
    }

})(jQuery, window, document);
