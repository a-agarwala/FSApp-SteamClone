import React from 'react';
import UpperRightNavBarContainer from './upper_right_nav_bar_container';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="global-header">
                <div class="content">
                    <div id="logo"></div>
                    <div>
                        <UpperRightNavBarContainer />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;