# React Core UI

`npm install react-core-ui`

## Components Included:
## Modal
`import { Modal } from 'react-core-ui/lib/modal'`
Basic Usage
```
  <Modal
    active={this.state.modalShow}
  >
    <h1>Modal Title</h1>
    <p>Modal Body Text.</p>
  </Modal>
```
#### Props
  - active ~ required: yes ~ type: bool
  - children ~ required: yes ~ type: object | string
  - overlayClassName ~ required: no ~ type: string
  - modalClassName ~ required: no ~ type: string
  - close ~ required: no ~ type: func
  - closeNode ~ required: no ~ type: node
  - onEscKeyDown ~ required: no ~ type: func
  - onOverlayClick ~ required: no ~ type: func
## Tooltip
`import { Tooltip } from 'react-core-ui/lib/tooltip'`
Basic Usage
```
  <span
      style={{ position: 'relative' }}
      onMouseEnter={{ ... }}
      onMouseLeave={{ ... }}
  >
    <Tooltip
      active={this.state.tooltipShow}
      position={'right'}
    >
      Some Tooltip Text.
    </Tooltip>
  </span>
```
#### Props
  - disabled ~ required: no ~ type: bool default: false
  - active ~ required: no ~ type: bool default: false
  - children ~ required: yes ~ type: object | string
  - position ~ required: no ~ type: string ('top' | 'left' | 'right' | 'bottom') default: bottom
  - dark ~ required: no ~ type: bool default: light

### TODO
- [x] Added Modal
- [ ] Browser Compatibility (Modal)
- [x] Added Tooltip
- [ ] Browser Compatibility (Tooltip)
- [ ] Add jest testing suite.
- [ ] Add table component.
- [ ] Add input component.
- [ ] Add single and multi select components.
- [ ] Add Downdown component
- [ ] Add Autocomplete component
