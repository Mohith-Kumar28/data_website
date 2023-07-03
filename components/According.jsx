import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function According() {

const faq=[
  {
    question:'How does Chargevisor work?',
    answer:'Chargevisor combines applied machine learning capabilities with powerful investigative workflows to detect and prevent fraud in real time. Our advanced algorithms analyze data from over 4 billion user accounts, providing accurate insights and protection.'
  },
  {
    question:'What sets Chargevisor apart from other fraud protection solutions?',
    answer:'Chargevisor stands out with its powerful combination of AI technology, extensive intelligence network, and seamless workflows. Our unsupervised machine learning algorithms enable precise detection of known and unknown fraudulent activities, delivering unparalleled accuracy and speed.'
  },
  {
    question:'Is Chargevisor compatible with existing systems and platforms?',
    answer:'Yes, Chargevisor is designed to seamlessly integrate with your existing systems and platforms. Our flexible architecture allows for easy implementation and integration, ensuring a smooth transition and minimal disruption to your operations.'
  },
  {
    question:'How long does it take to implement Chargevisor?',
    answer:'Implementation time may vary depending on your specific requirements and infrastructure. However, our dedicated implementation team works efficiently to ensure a swift and hassle-free integration process.'
  },
  {
    question:'How is customer support provided?',
    answer:'We provide comprehensive customer support through various channels, including email, phone, and a dedicated support portal. Our team of experts is available to assist you with any inquiries or issues you may have.'
  },
]

  return (
    <div className="w-full  ">
      <div className="mx-auto w-full flex flex-col gap-y-2  rounded-2xl bg-white p-2">
        {faq.map((i)=>(
        <Disclosure key={i.question}>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-base md:text-lg font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>{i.question}</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500">
               {i.answer}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
    ))}
      </div>
    </div>
  )
}
