<script lang="ts">
  import Calendar from '@event-calendar/core';
  
  import TimeGrid from '@event-calendar/time-grid';

  import type { PageData } from './$types';

  const { data }: { data: PageData } = $props();

  type event = {
    id: number,
    start: string,
    end: string,
    title: string,
    backgroundColor: string,
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
    extendedProps: {
      description: 'string',
      location: 'string',
      community_name: 'string',
    }
  });

  const plugins = [ TimeGrid ];
  const options = {
      view: 'timeGridWeek',
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
  <div class="modal-box card">
    <figure>
      <img
        src="https://cdn.discordapp.com/guild-events/1316191185613881385/c571a6595399d3fb845ece4acf16477b.png?size=2048"
        alt="Shoes"
        class="rounded-xl" />
    </figure>
    <div class="card-body">
      <h3 class="card-title">{modalInfo.title}</h3>
      <p class="py-4">{modalInfo.extendedProps.description}</p>
      <p class="py-4">{modalInfo.extendedProps.location}</p>
      <p class="py-4">{modalInfo.extendedProps.community_name}</p>
      <div class="card-actions modal-action justify-end">
        <form method="dialog">
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </div>
</dialog>
