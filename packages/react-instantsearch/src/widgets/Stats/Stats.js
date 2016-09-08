import React, {PropTypes, Component} from 'react';

import themeable from '../../core/themeable';
import translatable from '../../core/translatable';

class Stats extends Component {
  static propTypes = {
    translate: PropTypes.func.isRequired,
    applyTheme: PropTypes.func.isRequired,
    nbHits: PropTypes.number.isRequired,
    processingTimeMS: PropTypes.number.isRequired,
  };

  render() {
    const {translate, applyTheme, nbHits, processingTimeMS} = this.props;
    return (
      <span {...applyTheme('root', 'root')}>
        {translate('stats', nbHits, processingTimeMS)}
      </span>
    );
  }
}

export default themeable({
  root: 'Stats',
})(
  translatable({
    stats: (n, ms) =>
      `${n.toLocaleString()} results found in ${ms.toLocaleString()}ms`,
  })(
    Stats
  )
);