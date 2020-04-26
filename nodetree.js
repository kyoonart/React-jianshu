var nodetree = require('nodetree');
nodetree(process.cwd(), {
  all: false,
  directories: false,
  level: 4,
  prune: false,
  noreport: false
});