import "@/styles/styles.css"
import {
  // AnimatedTitle,
  Content,
  Footer,
  Header,
  Internationalization,
  LiquidEther
} from '@components'
import {AnimatedTitle} from "@/components";
import ThemeProvider from "@/context/ThemeContext.tsx";

function App() {
  return (
    <>
      {/*<div*/}
      {/*  style={{*/}
      {/*    position: "fixed",*/}
      {/*    width: "100%",*/}
      {/*    height: "100%",*/}
      {/*    zIndex: 1,*/}
      {/*    pointerEvents: "auto",*/}
      {/*  }}*/}
      {/*>*/}
      {/*colors={["#C470DB", "#FF9FFC", "#B19EEF"]}*/}
      <LiquidEther
        colors={["#C470DB", "#FF9FFC", "#B19EEF"]}
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
      />
      {/*</div>*/}
      {/*<div style={{*/}
      {/*  position: "relative",*/}
      {/*  zIndex: 2,*/}
      {/*  pointerEvents: "none",*/}
      {/*}}>*/}
      <Internationalization>
        <AnimatedTitle />
        {/*<ThemeProvider*/}
        {/*  attribute="class"*/}
        {/*  defaultTheme="system"*/}
        {/*  enableSystem={true}*/}
        {/*  disableTransitionOnChange*/}
        {/*>*/}
        {/*  <div style={{*/}
        {/*    position: "relative",*/}
        {/*    zIndex: 2,*/}
        {/*    pointerEvents: "none",*/}
        {/*  }}>*/}
        <ThemeProvider>
          <Header />
          <Content />
          <Footer />
          {/*  </div>*/}
        </ThemeProvider>
      </Internationalization>

      {/*</div>*/}
    </>
  )
}

export default App