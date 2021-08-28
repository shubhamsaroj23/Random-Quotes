import React, {useState} from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import LinearProgress from '@material-ui/core/LinearProgress';




function Quotes() {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  function getQuote() {
    axios.get("http://localhost:5001/",  { crossdomain: true }).then(response => {
      setText(response.data.text);
      setAuthor(response.data.author);
    });
  }


return (
    <div>
          <LinearProgress />

          <br />

      <Button variant="contained" onClick={getQuote}>
        Generate Quote  <FormatQuoteIcon />
      </Button>
      <h1>{text}</h1>
      <h3>{"-" + author}</h3>
      <LinearProgress />
    </div>
  )
}
export default Quotes;