import type { Database } from "@/types/database.types";

export type Post = Database["public"]["Tables"]["posts"]["Row"];
export type Comment = Database["public"]["Tables"]["comments"]["Row"];
export type Profile = Database["public"]["Tables"]["profiles"]["Row"];
export type PostLike = Database["public"]["Tables"]["post_likes"]["Row"];
