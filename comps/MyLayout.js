import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #ddd'
}

export default (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)
