<script>
      import Icon from 'svelte-awesome';
      import { facebookSquare, instagram, twitter } from 'svelte-awesome/icons';
</script>

    <ul class="footer-icons">
        <li>
            <a href="https://www.facebook.com/travelwithdavidandcarmela/?modal=admin_todo_tour">
                <div class="facebook-icon">
                    <Icon data={facebookSquare} scale="1.5"/>
                </div>
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com/go_go_bye_bye/">
                <div class="instagram-icon">
                    <Icon data={instagram} scale="1.5" />
                </div>
            </a>
        </li>
        <li>
            <a href="https://twitter.com/gogobyebye1">
                <div class="twitter-icon">
                    <Icon data={twitter} scale="1.5"/>
                </div>
            </a>
        </li>
    </ul>


<style>
    .facebook-icon {
    color: #3b5998;
  }
  .twitter-icon {
    color: #00acee;
  }
  .instagram-icon {
    color: #ea4c89;
  }
    .footer-icons {
    display: flex;
    justify-content: center;
    line-height: 1;
    margin-bottom: 0.5rem;
    list-style: none;
  }
  .footer-icons a {
    font-size: 1.5rem;
    margin: 0 2rem;
    transition: var(--transition);
  }
  .footer-icons li {
    transition: var(--transition);
  }
  .footer-icons li:hover {
    transform: translateY(-10%);
  }
</style>