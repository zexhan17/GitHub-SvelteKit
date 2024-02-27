<script>
  import "../app.css";

  import { enhance } from "$app/forms";
  import { goto } from "$app/navigation";

  export let data;
  $: ({ session, supabase } = data);

  let loading = false;

  const handleLogout = async () => {
    loading = true;
    let { error } = await supabase.auth.signOut();
    if (!error) {
      await goto("/", { invalidateAll: true, replaceState: true });
    }
    loading = false;
  };
</script>

<div class="container mx-auto">
  <div class="my-10 flex gap-20 items-center">
    {#if !!session}
      <button on:click={handleLogout} type="submit" class="btn btn-sm">
        {loading ? "Logging...Out" : "Logout"}
      </button>
      <a href="/home" class="link">Home</a>
    {:else}
      <form
        method="post"
        action="?/GitHubLogin"
        class=""
        use:enhance={() => {
          loading = true;
        }}
      >
        <button type="submit" class="btn btn-sm">
          {loading ? "Logging...In" : "Login"}
        </button>
      </form>
    {/if}
  </div>

  <slot />
</div>
