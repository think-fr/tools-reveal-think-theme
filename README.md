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
# relative url is required for ci/cd
git submodule add https://github.com/dzello/reveal-hugo.git themes/reveal-hugo
git submodule add ../think-theme.git themes/think

# copy hugo sample configuration and replace corresponding values
cp themes/think/sample/config.sample.tom config.toml
# if you want to activate CI/CD - no change required
# CI/CD requires token and settings which are set in few groups only
cp themes/think/sample/gitlab-ci.sample.yml .gitlab-ci.yml

```
