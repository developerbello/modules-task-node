//-? Import parse-json and other modules as neccessary here
const parseJson = require('parse-json');

class DataParser {
  constructor(data) {
    //++ Add your implementations here if necessary
    this.data = data;
    //+ Feel free to ignore the below lines for now and ask questions later
    this.php = this.php.bind(this);
    this.java = this.java.bind(this);
    this.python = this.python.bind(this);
    this.golang = this.golang.bind(this); 
  }

  php() {
    //++ Add your implementations here if necessary
    return parseJson(this.data)['php'];
  }

  java() {
    //++ Add your implementations here if necessary
    return parseJson(this.data)['java'];
  }

  python() {
    //++ Add your implementations here if necessary
    return parseJson(this.data)['python'];
  }

  golang() {
    //++ Add your implementations here if necessary
    return parseJson(this.data)['golang'];
  }
}

//-? Ensure to export the DataParser class for use in the index.js script
module.exports = DataParser;
