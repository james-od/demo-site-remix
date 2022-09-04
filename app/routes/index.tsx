
export default function Index() {

  return (
    <body>
    <div className="container">
      <div className="box">
        <div className="content">
          <div className="terminal-window">
            <header>
              <div className="button green"></div>
              <div className="button yellow"></div>
              <div className="button red"></div>
            </header>
            <section className="terminal">
              <div className="typing">
                $ Hi, I'm James
              </div>   
              <div>
                <a className="terminal-button" href="https://docs.google.com/document/d/1HDh_uXFCSLsbktGkYAeHrBtAmUV80v6fKCT_C1vDJUQ/edit">
                {"> CV"}
                </a>     
              </div>
              <div>
                <a className="terminal-button" href="https://www.linkedin.com/in/james-od/">
                {"> LinkedIn"}
                </a>     
              </div>   
              <div>
                <a className="terminal-button" href="https://github.com/james-od">
                {"> Github"}
                </a>     
              </div>                                       
            </section>
          </div>                    
        </div>
      </div>
    </div>
  </body>
  );
}
