<template>
        <FullCalendar
          :fixedWeekCount="fixedWeekCount"
          :showNonCurrentDates="showNonCurrentDates"
          :buttonText="buttonText"
          :locale="locale"
          :timeFormat="timeFormat"
          :firstDay="firstDay"
          :eventTimeFormat="eventTimeFormat"
          :weekNumbersWithinDays="weekNumbersWithinDays"
          :weekNumbers="weekNumbers"
          :events="events"
          :googleCalendarApiKey="googleCalendarApiKey"
          :defaultView="defaultView"
          :plugins="calendarPlugins"
        />
</template>

<style lang="scss">
.fc{
    margin-top: 20px;
}
@media only screen and (min-width: 768px) {
    .fc{
        margin: 50px 20px;
    }
}
</style>


<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import frLocale from "@fullcalendar/core/locales/sv";
import { mapState } from 'vuex'

export default {
    components: {
        FullCalendar
    },
    data(){
        return {
            fixedWeekCount: false,
            showNonCurrentDates: false,
            // buttonText: {
            //     today: "Idag"  <----- IS COMPUTED
            // },
            // locale: "sv",  <----- ALSO COMPUTED
            defaultView: "dayGridMonth",
            firstDay: 1,
            calendarPlugins: [dayGridPlugin, googleCalendarPlugin],
            googleCalendarApiKey: 'AIzaSyBHdD_5zD9F8YgfqeVa2xxL5hOoMFmdiZY',
            weekNumbers: true,
            weekNumbersWithinDays: true,
            events: {
                googleCalendarId: "kalendern@uppsalapolitices.se"
            },
            timeFormat: "HH:mm",
            eventTimeFormat: {
                hour: "numeric",
                minute: "2-digit"
                //meridiem: "short"
            }
        };
    },
    computed:{
        ...mapState({
            english: state => state.pages.english
        }),
        buttonText(){
            if(this.english){
                return {today: "Today"};
            } else {
                return {today: "Idag"};
            }
        },
        locale(){
            if(this.english){
                return "en";
            } else {
                return "sv";
            }
        }
    }
};
</script>
