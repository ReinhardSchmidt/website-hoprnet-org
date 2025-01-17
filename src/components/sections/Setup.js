import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FrameContextConsumer } from 'react-frame-component'
import { SectionProps } from '../utils/SectionProps'
import FrameRender from '../utils/FrameRender'

const mountTime = 1300
let timeout = null
const propTypes = {
  children: PropTypes.node,
  ...SectionProps.types,
}

const defaultProps = {
  children: null,
  ...SectionProps.defaults,
}
//RAW HTML
const HTML = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
</head>
<body>
<script src="https://unpkg.com/tripetto-runner-foundation"></script>
<script src="https://unpkg.com/tripetto-runner-autoscroll"></script>
<script src="https://unpkg.com/tripetto-services"></script>
<script>
var tripetto = TripettoServices.init({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMWJrU1J6Mk5QS2lsdUZrTDRzZExpVjJ2d2lOelFvSUx0aTNMSXBHdEFycz0iLCJkZWZpbml0aW9uIjoiWDNkT25vRkNmdDA2REIxR3hUZTBDeFE1M2NGVC8zSWtFU01nMDB0eVljYz0iLCJ0eXBlIjoiY29sbGVjdCJ9.STdzJVexzvWMw974nQPFaA9_2anZun_uYzPFQ2Zj1r4" });

TripettoAutoscroll.run({
    element: document.body,
    definition: tripetto.definition,
    styles: tripetto.styles,
    l10n: tripetto.l10n,
    locale: tripetto.locale,
    translations: tripetto.translations,
    attachments: tripetto.attachments,
    onSubmit: tripetto.onSubmit
});
</script>
</body>
</html>
`

const SetupHero = props => {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    return () => {
      clearTimeout(timeout)
    }
  })
  return (
    <>
      {!ready && (
        <div className="loading-frame">
          <div className="title">
            <div className="lds-ring">
              <div></div>
            </div>
          </div>
        </div>
      )}
      <FrameRender
        initialContent={HTML}
        className="component-frame whole-page frameIn"
        style={{ display: ready ? 'block' : 'none' }}
      >
        <FrameContextConsumer>
          {
            // Callback is invoked with iframe's window and document instances
            ({ document }) => {
              document.addEventListener('DOMContentLoaded', () => {
                timeout = setTimeout(() => {
                  setReady(true)
                }, mountTime)
              })
              // Render Children
            }
          }
        </FrameContextConsumer>
      </FrameRender>
    </>
  )
}

SetupHero.propTypes = propTypes
SetupHero.defaultProps = defaultProps

export default SetupHero
