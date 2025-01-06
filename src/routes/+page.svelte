<script lang="ts">
  import Calendar from '@event-calendar/core';
  
  // import TimeGrid from '@event-calendar/time-grid';

  // import Timeline from '@event-calendar/resource-timeline';

  import List from '@event-calendar/list';

  import type { PageData } from './$types';

  const { data }: { data: PageData } = $props();

  type event = {
    id: number,
    start: string,
    end: string,
    title: string,
    backgroundColor: string,
    resourceIds: string[],
    extendedProps: {
      description: string,
      location: string,
      community_name: string,
    }
  }

  let modalInfo: event = $state({
    id: 0,
    start: 'string',
    end: 'string',
    title: 'string',
    backgroundColor: 'string',
    resourceIds: [],
    extendedProps: {
      description: 'string',
      location: 'string',
      community_name: 'string',
    }
  });

  // const plugins = [ TimeGrid, Timeline, List ];
  const plugins = [ List ];
  const options = {
      nowIndicator: true,
      view: 'listWeek',
      // views: {
      //   resourceTimelineWeek: {
      //     slotWidth: 80,
      //     resources: data.resources,
      //     duration: { days: 1 },
      //   },
      //   listWeek: {
      //     resources: data.resources,
      //     duration: { week: 1 },
      //   }
      // },
      headerToolbar: {
        // start: 'resourceTimelineWeek,timeGridWeek,listWeek',
        start: '',
        center: 'title',
        end: 'prev next today'
      },
      events: data.events,
      duration: { days: 4 },
      // eventClick: function (info) { eventDetails(info) }
      eventClick: function (info: Calendar.info) {
        modalInfo = info.event;
        return eventModal.showModal();
      }
  };
</script>

<Calendar {plugins} {options} />

<dialog id="eventModal" class="modal modal-bottom sm:modal-middle">
  <div class="modal-box bg-base-100 image-full shadow-xl">
    <figure>
      <img
        src="https://cdn.discordapp.com/guild-events/1316191185613881385/c571a6595399d3fb845ece4acf16477b.png?size=2048"
        alt="Shoes"
        class="rounded-xl p-0" />
    </figure>
    <p class="py-2">{modalInfo.extendedProps.community_name}</p>
    <h3 class="text-2xl font-bold">{modalInfo.title}</h3>
    <p class="py-2">{modalInfo.extendedProps.description}</p>
    <!-- <p class="py-4">{modalInfo.extendedProps.location}</p> DEPRECATED: Mostly Resonite -->
    <div class="modal-action">
        <form method="dialog">
        <button class="btn btn-primary btn-disabled mx-2">Open Session</button>
        <button class="btn mx-2">Close</button>
        </form>
    </div>
  </div>
</dialog>
