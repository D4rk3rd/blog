/** @jsx h */
import blog, { h } from 'deno_blog/blog.tsx';

blog({
  title: 'Dorfler David',
  description: 'Projects',
  author: 'David',
  avatar: '/posts/images/avatar.png',
  avatarClass: 'full',
  favicon: './images/favicon.ico',
  links: [
    { title: 'GitHub', url: 'https://github.com/D4rk3rd' },
  ],
  theme: 'auto',
  footer: (
    <footer class="mt-20 pb-16 lt-sm:pb-8 lt-sm:mt-16">
      <a href="/" title="T++">
        Dorfler David © {new Date().getFullYear()}
      </a>
    </footer>
  ),
});
