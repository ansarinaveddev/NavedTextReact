import React from 'react'
import '../App.css';

export default function About(props) {
  return (
    <div className='container' style={{ color: props.mode === "dark" ? "white" : "black" }}>
      <h1 style={{ textAlign: "center" }}>About NavedText</h1>
      <h2>Analyze Your text</h2>
      <p>NavedText gives you a way to analyze your text quickly and efficiently. Be it word count, character count.</p>
      <h2>Free to use</h2>
      <p>NavedText is a free character counter tool that provide instant character count & word count statistics for a given text. NavedText reports the number of words and characters. Thus it is suitable for writing text with word/ character limit</p>
      <h2>Browser Compatible</h2>
      <p>This word counter software works in any web browser such as Chrome, Firefox, Edge, Safari, Opera. It suits to count characters in faceboook, blog, books, excel, document, pdf document, essays, etc.</p>
    </div>
  )
}
