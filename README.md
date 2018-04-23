# jekyll-theme-experiment

Since I started using [Jekyll](https://jekyllrb.com/) I have wanted to make a theme, so I have decided to create it to publish my portfolio.

![](https://cl.ly/2F3f432B0z09/Screen%20Recording%202018-02-24%20at%2011.23%20p.m..gif)

Made with ♥️ by @anxhe

Your can see a demo [here](https://anxhe.github.io/jekyll-theme-experiment/)

## Installation

You will need to have installed [ruby](https://www.ruby-lang.org/en/documentation/installation/).

Then, in a bash terminal execute the following commands:

```sh
gem install bundler jekyll
```

## Usage

- Create a new Jekyll site (by running the `jekyll new` command), Jekyll installs a site that uses a gem-based theme called Minima.

```bash
jekyll new <your-blog-name>
cd <your-blog-name>
```
- Now we have to replace the `minima` gem with `jekyll-theme-experiment` in `Gemfile`, as follows:

```diff
# Gemfile
- gem "minima", "~> 2.0"
+ gem 'jekyll-theme-experiment'
```

- Then run:

`bundle install`

- Next, we need to replace `minima` theme key in `_config.yml` as follows:

```yml
# _config.yml
theme: jekyll-theme-experiment
```

- Each section and content is customizable via `_config.yml` file:

Replace the sample data with your own:

```yml

title: Your awesome title
description: >- # this means to ignore newlines until "baseurl:"
  Write an awesome description for your new site here. You can edit this
  line in _config.yml. It will appear in your document head meta (for
  Google search results) and in your feed.xml site description.
```

jekyll-theme-experiment allows you to customize the following sections in the main layout:

  - about
  - portfolio
  - tools

Add the following sample data to try it:

```yml
jekyll-theme-experiment:
  about: # optional
    avatar: https://robohash.org/experiment-avatar.png?size=300x300

  portfolio: # optional
    title: Portfolio
    # Depending of the number of projects, you will need to update $projects
    # variable in a sass file. e.g.
    # _sass/main.scss
    #
    projects:
      - name: Jekyll Theme experiment
        link: http://example.com
        github: https://github.com/anxhe/jekyll-theme-experiment
        img_relative_url: /assets/example.png

  tools: # optional
    title: Tools and Experience 
    icons:
      - relative_url: /assets/icons/bitbucket/bitbucket-original.svg
```

By default, jekyll generates a couple markdown files, we'll need to make
a few changes:

- Update `index.md` adding `title: home` to yaml's frontmatter
- Delete `about.md`, as this theme uses similar in the home layout.
- If you pretend use this site for blogging, you'll need to create a `blog.md` file with the following contents:

![](https://cl.ly/3h3v3b210c0p/Screen%20Recording%202018-02-24%20at%2011.27%20p.m..gif)

```md
---
layout: blog
title: blog
permalink: /blog/
---
```

Now we're ready, start the server:

```sh
bundle exec jekyll serve
```

Finally, open  http://127.0.0.1:4000/ in the browser, and that's it, feel free to poke around.

## Customize navigation links

**Taken from minima theme**

This allows you to set which pages you want to appear in the navigation area and configure order of the links. For instance, to only link to the about and the portfolio page, add the following to your `_config.yml`:

```yml
header_pages:
  - about.md
  - portfolio.md
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/anxhe/jekyll-theme-experiment/issues. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Credits

- [Jekyll](https://github.com/jekyll/jekyll) and [Minima](https://github.com/jekyll/minima) - Thanks to their creators and contributors
- [Vitaly Rubtsov](https://dribbble.com/Vitwai) for inspiration on  his [hamburguer menu animation](https://dribbble.com/shots/2293621-Hamburger-Menu-Animation)
- [Luis Manuel](https://scotch.io/@lmgonzalves) for his implementation of the above hamburger menu on [this tutorial](https://scotch.io/tutorials/building-a-morphing-hamburger-menu-with-css)

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
