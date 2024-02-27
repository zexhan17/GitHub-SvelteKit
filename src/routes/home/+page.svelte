<script>
  import { page } from "$app/stores";
  let name = "";

  if (!!$page.data.session) {
    name = $page.data.session.user.user_metadata.full_name;
  }
</script>

<p class="text-4xl">Welcome {name}!</p>
