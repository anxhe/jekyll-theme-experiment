# coding: utf-8

require_relative 'lib/jekyll-theme-experiment/version'

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-experiment"
  spec.version       = ::JekyllThemeExperiment::VERSION
  spec.authors       = ["Angelina Moreno Robledo"]
  spec.email         = ["anyelinamoreno@gmail.com"]

  spec.summary       = %q{This is a jekyll theme made with love}
  spec.homepage      = "https://github.com/anxhe/jekyll-theme-experiment"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

  spec.required_ruby_version = "~> 3.0"
  spec.add_runtime_dependency "jekyll", "~> 4"

  spec.add_development_dependency "bundler", "~> 2.2"
  spec.add_development_dependency "rake", "~> 13.0"
end
