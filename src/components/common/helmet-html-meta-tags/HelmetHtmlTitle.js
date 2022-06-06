import React from "react";
import PropTypes from 'prop-types';
import {Helmet} from "react-helmet";
import { APP_CONSTANTS } from '../../../config';

const HelmetHtmlTitle = (props) => {
    return (
        <Helmet>
            <title>{APP_CONSTANTS.APP_NAME + (props.pageName ? ' | ' + props.pageName : null)}</title>
        </Helmet>
  
    );
};
export default HelmetHtmlTitle;
HelmetHtmlTitle.propTypes = {
	pageName: PropTypes.string,
}
HelmetHtmlTitle.defaultProps = {
    pageName: null,
};