import React from 'react'
import classNames from 'classnames'
import { SectionTilesProps } from '../../utils/SectionProps'
import Image from '../elements/Image'

const propTypes = {
  ...SectionTilesProps.types,
}

const defaultProps = {
  ...SectionTilesProps.defaults,
}

class TeamAndInvestors extends React.Component {
  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props

    const outerClasses = classNames(
      'section center-content',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    )

    const innerClasses = classNames(
      'section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider',
      'teamAndInvestors-tiles-inner'
    )

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <div className="tiles-item has-shadow has-bg-color invert-color card reveal-from-top">
              <div className="tiles-item-content center-content-mobile">
                <a href="/HOPR/#team">
                  <h3 className="mt-0 mb-0" data-reveal-container=".tiles-item">
                    The people
                    <br /> behind HOPR
                  </h3>
                  <Image src={require('../../assets/images/cards/team-card.png')} />
                </a>
              </div>
            </div>

            <div className="tiles-item has-shadow has-bg-color invert-color card reveal-from-top">
              <div className="tiles-item-content center-content-mobile">
                <a href="/HOPR/#investors">
                  <h3 className="mt-0 mb-0" data-reveal-container=".tiles-item">
                    The investors
                    <br /> behind HOPR
                  </h3>
                  <Image src={require('../../assets/images/cards/investors-card.png')} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

TeamAndInvestors.propTypes = propTypes
TeamAndInvestors.defaultProps = defaultProps

export default TeamAndInvestors
