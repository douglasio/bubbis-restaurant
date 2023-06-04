<h1>
  Restaurant Website with Gatsby + Contentful
</h1>

## What is this?

A simple CMS-driven website that could be used by a small restaurant. No more pages than necessary, simple to navigate, and branded to fit the aesthetic of the eatery.

## Why build it?

Restaurant websites are always so difficult to navigate. Just show me where you are, when you're open, and what's on your menu! Using an existing local restaurant's website as inspiration, I redesign and rebuilt it using better design practices for usability, accessibility, and maintainability.

## Why this stack?

### Gatsby (with TypeScript)

Gatsby's native integration with GraphQL makes sourcing data from Contentful's API fairly intuitive. Given the simplicity of the site itself, static pages will be the most performant option, especially for visitors browsing on mobile&mdash;say, when looking at the menu on their phone at the restaurant.

### Contentful

Menus and page content are simple data structure but may need frequent edits. Using content models mapped to components rather than freeform WYSIWYG editors, we can enable site maintainers of any technical skill level to edit their site without worrying about breaking formatting.

### Netlify

Fast and easy deployments, simple set-up, well-documented support for build hooks from Contentful and Github.

### Styled Components

Styled components' theming options make it easier to reuse this website template for updated branding or even other restaurants.
