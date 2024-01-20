/* eslint-disable react/prop-types */
import CodeSnippet from './CodeSnippet';

function CodeExamples(props) {
  return (
    <div key={props.key}>
      <h2 className='mb-4 text-2xl'>{props.title}</h2>
          {props.content.map((example) => {
            return (
              <>
              <h3 className='text-xl mb-3'>{example.subtitle}</h3>
              <CodeSnippet code={example.code} />
              </>
            );
          })} 
    </div>
  )
}

export default CodeExamples
