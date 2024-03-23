import { Footer } from "../components/component/footer";
import { Header } from "../components/component/header";
export default function GlobalLayouts(props) {
  return (
    <div>
      <div className="w-full fixed top-0 left-0 right-0">
        <Header></Header>
      </div>
      {props.children}
      <div className="w-full fixed bottom-0 left-0 right-0">
        <Footer></Footer>
      </div>
    </div>
  );
}
