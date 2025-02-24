
<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let email;

  // Handle escape key press
  function handleKeydown(event) {
    if (event.key === 'Escape') {
      dispatch('close');
    }
  }

  // Add keyboard listener when component mounts
  import { onMount, onDestroy } from 'svelte';
  
  onMount(() => {
    window.addEventListener('keydown', handleKeydown);
  });

  onDestroy(() => {
    window.removeEventListener('keydown', handleKeydown);
  });
</script>

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

<div class="flex-1 flex flex-col bg-zinc-900 p-6">
  <div class="flex items-center justify-between mb-6">
    <button
      class="text-gray-400 hover:text-white"
      on:click={() => dispatch('close')}
    >
      ← Back to list
    </button>
    <div class="text-sm text-gray-400">{email.date}</div>
  </div>

  <div class="mb-6">
    <h1 class="text-2xl font-bold mb-2">{email.subject}</h1>
    <div class="text-gray-400 mb-4">From: {email.from}</div>
  </div>

  <div class="prose prose-invert">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </p>
    <p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
</div>
