<script>
    import SocialLinks from "./constants/SocialLinks.svelte";
</script>

        <footer class="footer">
      <div>
        <SocialLinks scale="1.6"/>
        <p>
          &copy;{new Date().getFullYear()} GoGoByeBye and David Erickson. All rights reserved
        </p>
      </div>
    </footer>

<style>
  .footer {
    height: 7rem;
    text-align: center;
    background: var(--clr-black);
    display: grid;
    place-items: center;
  }

  .footer p {
    margin-bottom: 0;
    color: var(--clr-white);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }
</style>