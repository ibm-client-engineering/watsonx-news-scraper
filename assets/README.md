# Environment Setup

## Conda

First things first you need to install conda if you haven't already. Check [here](https://conda.io/projects/conda/en/latest/user-guide/install/index.html) and install miniconda. Once you have installed conda, create a new environment for this project.


## Rust

For some reason, one of the dependencies for this project has a dependency itself that was requiring me to have a rust compiler in order to install it via pip. So you might need to install Rust, your mileage may vary. [Here's the link](https://www.rust-lang.org/tools/install), and remember to add it to the path.

## Python

This is the easy part, after a quick `conda install python` and a following `pip install --upgrade pip`, run `pip install -r requirements.txt` from within the assets directory, and you should be all good to run the project.