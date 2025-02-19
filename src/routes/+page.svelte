<script>
  import Sidebar from '$lib/components/Sidebar.svelte';
  import EmailList from '$lib/components/EmailList.svelte';
  
  let selectedFolder = 'inbox';
</script>

<div class="flex h-screen bg-gray-900 text-gray-100">
  <Sidebar {selectedFolder} />
  <EmailList {selectedFolder} />
</div>
