<script>
  export let selectedFolder;
  
  const folders = [
    { id: 'inbox', label: 'Inbox', emoji: '✉️' },
    { id: 'sent', label: 'Sent', emoji: '📤' },
    { id: 'starred', label: 'Starred', emoji: '⭐' },
    { id: 'archive', label: 'Archive', emoji: '🗃️' },
    { id: 'trash', label: 'Trash', emoji: '🗑️' }
  ];
</script>

<div class="w-64 border-r border-gray-700 p-4">
  <div class="mb-8">
    <button class="w-full bg-sky-700 hover:bg-sky-600 active:bg-sky-800 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2">
      <span class="text-lg">✏️</span>
      Compose
    </button>
  </div>
  
  <nav>
    <ul class="space-y-2">
      {#each folders as folder}
        <li>
          <button
            class="w-full py-2 px-4 rounded-lg flex items-center gap-3 {
              selectedFolder === folder.id ? 'bg-gray-800' : 'hover:bg-gray-800'
            }"
            on:click={() => selectedFolder = folder.id}
          >
            <span class="text-lg">{folder.emoji}</span>
            {folder.label}
          </button>
        </li>
      {/each}
    </ul>
  </nav>
</div>
