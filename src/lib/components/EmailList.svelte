<script>
  import EmailView from './EmailView.svelte';
  export let selectedFolder;
  
  let selectedEmail = null;

  const emails = [
    {
      id: 1,
      from: 'john.doe@example.com',
      subject: 'Project Update',
      preview: 'Here are the latest updates on the project...',
      date: '10:30 AM',
      unread: true
    },
    {
      id: 2,
      from: 'jane.smith@example.com',
      subject: 'Meeting Notes',
      preview: 'Notes from today\'s team meeting...',
      date: 'Yesterday',
      unread: false
    }
  ];

  function handleEmailSelect(email) {
    selectedEmail = email;
  }

  function handleCloseEmail() {
    selectedEmail = null;
  }
</script>

<div class="flex-1 flex flex-col">
  {#if selectedEmail}
    <EmailView email={selectedEmail} on:close={handleCloseEmail} />
  {:else}
    <!-- Search Bar -->
    <div class="p-4 border-b border-gray-700">
      <div class="relative">
        <span class="material-icons absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        </span>
        <input
          type="text"
          placeholder="Search emails..."
          class="w-full bg-gray-800 text-gray-100 py-2 px-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
    </div>

    <!-- Email List -->
    <div class="flex-1 overflow-auto">
      {#each emails as email}
        <div
          class="p-4 border-b border-gray-700 hover:bg-gray-800 cursor-pointer"
          on:click={() => handleEmailSelect(email)}
        >
          <div class="flex items-center justify-between">
            <div class="flex-1">
              <div class="flex items-center gap-2">
                <span class="font-medium {email.unread ? 'text-white' : 'text-gray-400'}">
                  {email.from}
                </span>
                {#if email.unread}
                  <div class="w-2 h-2 bg-blue-600 rounded-full"></div>
                {/if}
              </div>
              <div class="font-medium mt-1">{email.subject}</div>
              <div class="text-gray-400 text-sm mt-1">{email.preview}</div>
            </div>
            <div class="text-sm text-gray-400">{email.date}</div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>
