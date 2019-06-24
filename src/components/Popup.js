import React from 'react';

class Popup extends React.Component {
  render() {
    console.info('Pop up props:' + JSON.stringify(this.props))
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="popup-backdrop">
        <div className="popup">
          <table>
              <tr>
                <td>There </td>
              </tr>
              <tr>
                <td>Should</td>
              </tr>
              <tr>
                <td>Be</td>
                <td>A Form</td>
              </tr>
              <tr>
                <td> 
                    <button className="popup-close">
                        Close
                    </button>
                </td>
            </tr>
         </table>
          
        </div>
      </div>
    );
  }
}

export default Popup;