import React, { useEffect, useState } from 'react';

type Article = {
	id: number;
	title: string;
	description: string;
	url: string;
	social_image?: string;
};

const Blog: React.FC = () => {
	const [articles, setArticles] = useState<Article[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchArticles = async () => {
			try {
				const response = await fetch('https://dev.to/api/articles?username=andres_medina_98771025af8');
				if (!response.ok) {
					throw new Error('Error fetching articles');
				}
				const data: Article[] = await response.json();
				setArticles(data);
			} catch (err: any) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchArticles();
	}, []);

	console.log(articles[0])

	if (loading) return <p>Cargando artículos...</p>;
	if (error) return <p>Error: {error}</p>;

	return (
		<div>
			<h1>Mis Notas en Dev.to</h1>
			<ul>
				{articles.map((article) => (
					<li key={article.id}>
						<a href={article.url} target="_blank" rel="noopener noreferrer">
							{article.title}
						</a>
						<p>{article.description}</p>
						<img src={article.social_image} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Blog;
