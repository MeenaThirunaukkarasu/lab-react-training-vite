function Greetings(props) {
    const { lang, children } = props;
    const greetings = {
      de: "Hallo",
      en: "Hello",
      es: "Hola",
      fr: "Bonjour",
    };
    return (
      <div className="greetings">
        {greetings[lang]}, {props.children}
      </div>
    );
  }
  
  export default Greetings;