import './billboard.css';

type BillboardProps = {
  mainWord: string;
  neonWord?: string;
};

const Billboard = ({ mainWord, neonWord }: BillboardProps) => {
  return (
    <div className="billboardContainer">
      <span className="mainWord">{mainWord}</span>
      <span className="neon">{neonWord}</span>
    </div>
  );
};

export default Billboard;
