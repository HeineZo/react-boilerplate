import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';
import { useAtom } from 'jotai';
import { countAtom } from '../main';
import { useQueryState } from 'nuqs';

export default function Home() {
	const [count, setCount] = useAtom(countAtom);
	const [name, setName] = useQueryState('name');

	return (
		<main className='flex flex-col items-center'>
			<section className='flex flex-col justify-center items-center gap-4'>
				<h1>👋 Hi {name ?? 'there'}</h1>
				<div className='flex gap-2 items-center'>
					<h6>You clicked {count} times</h6>
					<Button onClick={() => setCount(count + 1)}>Click</Button>
				</div>
				<div className='flex flex-col gap-1.5'>
					<Label htmlFor='name'>Your name</Label>
					<Input
						value={name || ''}
						onChange={(e) => setName(e.target.value)}
						placeholder='Enzo'
					/>
				</div>
			</section>
		</main>
	);
}
