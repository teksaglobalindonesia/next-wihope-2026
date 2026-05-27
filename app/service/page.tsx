import Header from '@/components/custom/header';
import { CustButton } from '@/components/custom/CustButton';
import { Button } from '@/components/ui/button';
import SimpleHero from '@/components/custom/simple-hero';
import ServiceList from '@/components/custom/service-list';
import Quote from '@/components/custom/quote';


export default function Page() {
    return(
        <div>
            <SimpleHero/>
            <ServiceList/>
            <Quote/>
        </div>
    )
}