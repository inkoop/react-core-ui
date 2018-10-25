import React from 'react'
import { ComponentLayout } from 'spa/layout'
import Modal from './modal'

const display = () => {
  return (
    <ComponentLayout>
      <Modal />
    </ComponentLayout>
  )
}

export { display as ModalDisplay }

export { Modal }

export default Modal
