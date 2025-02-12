import React from "react"
import { Product } from "@/types"
import Link from "next/link"
import Image from "next/image"

interface Props {
	product: Product
}

const ProductCard = ({ product }: Props) => {
	return (
		<Link href={`/products/${product._id}`} className="product-card">
			<div className="product-card_img-container">
				<Image
					src={product.image}
					alt={product.title}
					width={200}
					height={200}
					className="product-card_img"
				/>
			</div>

			<div className="flex-1 flex flex-col">
				<div className="flex justify-between items-start gap-5 flex-wrap pb-6">
					<div className="flex flex-col gap-3">
						<p className="text-[28px] text-secondary font-semibold">
							{product.title}
						</p>

						<Link
							href={product.url}
							target="_blank"
							className="text-base text-black opacity-50"
						>
							Visit Product
						</Link>
					</div>

					<div className="flex items-center gap-3">
						<div className="product-hearts">
							<Image
								src="assets/icons/red-heart.svg"
								alt="heart"
								width={20}
								height={20}
							/>

							<p className="text-base font-semibold text-[#D46F77]"></p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default ProductCard
