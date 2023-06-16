# Think theme for slides with Reveal-Hugo

This theme brings Think's design to Reveal-hugo slides.

## How to use it

The better place to get all information is locate on [reveal-hugo-template](https://gitlab.com/thinkfr/formations/reveal-hugo-template) project.

However you can use it this template the following command:

```bash
# First create a repo on gitlab with the name with your presentation.

# Create a new hugo site :
# hugo do not create site if folder is not empty
hugo new site <presentation_name>
cd <presentation_name>

# initialize git and add remote
git init
git remote add origin <git_repository_ssh_url>

# add remote themes reveal-hugo and this one
git submodule add https://github.com/dzello/reveal-hugo.git themes/reveal-hugo
git submodule add https://github.com/think-fr/tools-reveal-think-theme-public.git themes/think

# copy hugo sample configuration and replace corresponding values
cp themes/think/sample/config.sample.toml config.toml

```
