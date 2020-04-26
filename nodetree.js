var nodetree = require('nodetree');
nodetree(process.cwd(), {
  all: true,
  directories: false,
  level: 5,
  prune: false,
  noreport: false
});