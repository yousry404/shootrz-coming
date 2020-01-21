import React, { useEffect } from "react"
import { getEvent } from "./actions"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Row, Col, Container } from "reactstrap"
import { Link } from "gatsby"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import  { NavigateBefore} from "@material-ui/icons"
const Event = ({ uuid, getEvent, event }) => {
  const token = JSON.parse(localStorage.getItem("shootrzToken"))
  const { status, items } = event
  const EventStatus = () => {
    switch (status) {
      case "payment":
        return (
          <div className="event-page__payment">
            <h1>Your event still needs payment confirmation</h1>
          </div>
        )
      case "assigning":
        return (
          <div>
            <h1>
              Your payment is done and event is being assigned to a shootr
            </h1>
          </div>
        )
      case "progress":
        return (
          <div>
            <h1>Your event is in progress</h1>
          </div>
        )
      case "editing":
        return (
          <div>
            <h1>Your event is being edited</h1>
          </div>
        )
      case "done":
        return (
          <div>
            <Row>{
                items.map(item => (<Col md={4} key={item.id}>here</Col>))
            }</Row>
          </div>
        )
      default:
        return (<div>loading</div>)
    }
  }
  useEffect(() => {
    getEvent({ token, id: uuid })
  }, [])
  return (
    <div className="event-page">
      <Container>
        <div className="d-flex justify-content-between event-page__header">
            <Link className="event-page__header__before" to="/app/events"><NavigateBefore /></Link>

          <h1>My Event</h1>
          <Link to="/app/book" className="event-page__header__new"><AddCircleOutlineIcon /> New booking</Link>
        </div>
        <EventStatus />
      </Container>
    </div>
  )
}

const mapStateToProps = ({ event }) => ({
  loading: event.loading,
  event: event.event,
})
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getEvent,
    },
    dispatch
  )
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Event)
