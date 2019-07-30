# Run PHP Unit Tests
workflow "PHP Tests" {
  on = "push"
  resolves = ["PHPTestUnit"]
}

action "PHPInstall" {
  uses = "MilesChou/composer-action@master"
  args = "install"
}

action "PHPTestUnit" {
  uses = "MilesChou/composer-action@master"
  needs = "PHPInstall"
  args = "test:unit"
}

# Run JavaScript Unit Tests
workflow "JS Tests" {
  on = "push"
  resolves = ["JsTest"]
}

action "JsInstall" {
  uses = "nuxt/actions-yarn@master"
  args = "install"
}

action "JsTest" {
  needs = "JsInstall"
  uses = "nuxt/actions-yarn@master"
  args = "test:once"
}

# Integration Tests
workflow "Integration" {
  on = "push"
  resolves = ["WordPress Tests"]
}

action "WordPress Tests" {
  uses = "actions/bin/sh@master"
  args = ["./bin/install-docker.sh"]
}

