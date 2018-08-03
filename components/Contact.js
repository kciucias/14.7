
var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  }, // item to wlasciwosc wchodzaca w sklad komponentu- walidacja tej wlasciwosci (czyli item to jest object wchodzacy w sklad tablicy)

  render: function() {
    return (
      React.createElement('div', {className: 'contactItem'},
        React.createElement('img', {
          className: 'contactImage',
          src: 'https://www.rolls-royce.com/~/media/Images/R/Rolls-Royce/content-images/media-contacts/dummy-contact.jpg?hu003d453u0026lau003denu0026wu003d504'
        }),
        React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
        React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
        React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email},
          this.props.item.email
        )
      )
    )
  },
});