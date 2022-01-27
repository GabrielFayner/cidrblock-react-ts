import { fromCIDR } from '../../lib/cidr/cidr'
import { NumberInput  } from '../numberInput/NumberInput'

type CIDRBlockProps = {
  cidr: `${number}.${number}.${number}.${number}/${number}`;
}

export const CIDRBlock = ({ cidr }: CIDRBlockProps) => {

  const [p1, p2, p3, p4, mask] = fromCIDR(cidr)

  return (
    <div>
       <NumberInput min={0} max={255} initialValue={p1} />
       <NumberInput min={0} max={255} initialValue={p2} />
       <NumberInput min={0} max={255} initialValue={p3} />
       <NumberInput min={0} max={255} initialValue={p4} />
       <NumberInput min={0} max={32}  initialValue={mask} /> 
    </div>
  )
}