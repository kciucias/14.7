
var Contacts = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },
// map() bierze element z tablicy this.props.items (odwolanie do propsa o nazwie item z komponentu contact.js) Czym jest contact?
  render: function() {
    var contacts = this.props.items.map(function(contact) {
        return React.createElement(Contact, {item: contact, key: contact.id});
    }); // {item: contact, key: contact.id} ??

    return (
      React.createElement('ul', {className: 'contactsList'}, contacts)
    );
  }
});