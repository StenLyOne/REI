"use client";

import Button from "@/components/Button";
import EcosystemItem from "@/components/EcosystemItem";
import GlowIcon from "@/components/GlowIcon";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
} from "@/components/variantsAnimation";

export default function Ecosystem() {
  return (
    <motion.section
      id="Ecosystem"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      aria-label="Ecosystem comparison between REI Certified and Traditional Realtors"
      className="relative max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 mb-[100px] lg:mb-[200px]"
    >
      <motion.div variants={itemVariants}>
        <GlowIcon text="Ecosystem" img={false} />
      </motion.div>
      <motion.div className="space-y-[48px]" variants={itemVariants}>
        <div className="text-center">
          <motion.h2
            className="max-w-[800px] text-center mx-auto"
            variants={itemVariants}
          >
            Why REI Institute Certified Realtors
            <span className="gradient-text"> Build Wealth Faster </span> Than
            Traditional Agents
          </motion.h2>
          <motion.p
            className="pt-[24px] pb-[36px] max-w-[500px] mx-auto"
            variants={itemVariants}
          >
            See how certified investor-focused agents build smarter businesses,
            create real wealth, and escape the commission grind.
          </motion.p>
          <motion.div className="mx-auto w-max" variants={itemVariants}>
            <Button />
          </motion.div>
        </div>
        <div>
          <div
            className="w-full px-[20px] py-[36px] sm:p-[36px] rounded-[20px] flex shadow-classic text-left border-1 border-border"
            style={{ background: "var(--secondary)" }}
          >
            <div className="w-full">
              <div className="w-full flex gap-[24px]">
                <h4 className="md:w-[50%] pb-[24px] mb-[12px]">
                  REIS Certified Realtors
                </h4>
                <h4 className="w-[50%] pb-[24px] mb-[12px] font-normal hidden md:block">
                  Traditional Realtors
                </h4>
              </div>
              <motion.div
                className="w-full flex items-center justify-between gap-[24px] mb-[16px] pb-[18px] border-b-1 border-gray-200"
                variants={itemVariants}
              >
                <div className="w-full">
                  <EcosystemItem
                    rei={true}
                    text="Learn from practitioners and apply immediately"
                  />
                </div>
                <div className="w-full hidden md:block">
                  <EcosystemItem
                    rei={false}
                    text="Chase clients and commissions"
                  />
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-between gap-[24px] mb-[16px] pb-[18px] border-b-1 border-gray-200"
                variants={itemVariants}
              >
                <div className="w-full">
                  <EcosystemItem
                    rei={true}
                    text="Work with investor clients and own properties"
                  />
                </div>
                <div className="w-full  hidden md:block">
                  <EcosystemItem
                    rei={false}
                    text="Serve everyone with no focus"
                  />
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-between gap-[24px] mb-[16px] pb-[18px] border-b-1 border-gray-200"
                variants={itemVariants}
              >
                <div className="w-full">
                  <EcosystemItem
                    rei={true}
                    text="Help investors and close more deals"
                  />
                </div>
                <div className="w-full hidden md:block">
                  <EcosystemItem
                    rei={false}
                    text="Constantly compare to top producers"
                  />
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-between gap-[24px] mb-[16px] pb-[18px] border-b-1 border-gray-200"
                variants={itemVariants}
              >
                <div className="w-full">
                  <EcosystemItem
                    rei={true}
                    text="Lead by example for clients and peers"
                  />
                </div>
                <div className="w-full hidden md:block">
                  <EcosystemItem
                    rei={false}
                    text="Pretend to understand investments"
                  />
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-between gap-[24px] mb-[16px] pb-[18px] border-b-1 border-gray-200"
                variants={itemVariants}
              >
                <div className="w-full">
                  <EcosystemItem rei={true} text="Work less, travel more" />
                </div>
                <div className="w-full hidden md:block">
                  <EcosystemItem
                    rei={false}
                    text="Feast or famine income cycles"
                  />
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-between gap-[24px] mb-[16px] pb-[18px] border-b-1 border-gray-200"
                variants={itemVariants}
              >
                <div className="w-full">
                  <EcosystemItem
                    rei={true}
                    text="Build net worth through real assets"
                  />
                </div>
                <div className="w-full hidden md:block">
                  <EcosystemItem
                    rei={false}
                    text="No personal investment portfolio"
                  />
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-between gap-[24px] mb-[16px] pb-[18px] border-b-1 border-gray-200"
                variants={itemVariants}
              >
                <div className="w-full">
                  <EcosystemItem
                    rei={true}
                    text="Earn consistent passive income"
                  />
                </div>
                <div className="w-full hidden md:block">
                  <EcosystemItem
                    rei={false}
                    text="Income stops when deals stop"
                  />
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-between gap-[24px] mb-[16px] pb-[18px] border-b-1 border-gray-200"
                variants={itemVariants}
              >
                <div className="w-full">
                  <EcosystemItem
                    rei={true}
                    text="Create legacy and long-term value"
                  />
                </div>
                <div className="w-full hidden md:block">
                  <EcosystemItem
                    rei={false}
                    text="No vision beyond short-term gains"
                  />
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-between gap-[24px]"
                variants={itemVariants}
              >
                <div className="w-full">
                  <EcosystemItem
                    rei={true}
                    text="Take control of your finances"
                  />
                </div>
                <div className="w-full hidden md:block">
                  <EcosystemItem
                    rei={false}
                    text="No retirement plan or exit strategy"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <div
            className="w-full px-[20px] py-[36px] sm:p-[36px]  mt-[32px] bg-secondary rounded-[20px] flex md:hidden shadow-classic border-1 border-border"
            style={{ background: "var(--secondary)" }}
          >
            <div className="w-full">
              <motion.div
                className="w-full flex gap-[24px]"
                variants={itemVariants}
              >
                <h4 className="pb-[24px] mb-[12px] font-normal">
                  Traditional Realtors
                </h4>
              </motion.div>
              <motion.div
                className="w-full flex items-center justify-between gap-[24px] mb-[16px] pb-[18px] border-b-1 border-gray-200"
                variants={itemVariants}
              >
                <div className="w-full">
                  <EcosystemItem
                    rei={false}
                    text="Chase clients and commissions"
                  />
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-between gap-[24px] mb-[16px] pb-[18px] border-b-1 border-gray-200"
                variants={itemVariants}
              >
                <div className="w-full">
                  <EcosystemItem
                    rei={false}
                    text="Serve everyone with no focus"
                  />
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-between gap-[24px] mb-[16px] pb-[18px] border-b-1 border-gray-200"
                variants={itemVariants}
              >
                <div className="w-full">
                  <EcosystemItem
                    rei={false}
                    text="Constantly compare to top producers"
                  />
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-between gap-[24px] mb-[16px] pb-[18px] border-b-1 border-gray-200"
                variants={itemVariants}
              >
                <div className="w-full">
                  <EcosystemItem
                    rei={false}
                    text="Pretend to understand investments"
                  />
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-between gap-[24px] mb-[16px] pb-[18px] border-b-1 border-gray-200"
                variants={itemVariants}
              >
                <div className="w-full">
                  <EcosystemItem
                    rei={false}
                    text="Feast or famine income cycles"
                  />
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-between gap-[24px] mb-[16px] pb-[18px] border-b-1 border-gray-200"
                variants={itemVariants}
              >
                <div className="w-full">
                  <EcosystemItem
                    rei={false}
                    text="No personal investment portfolio"
                  />
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-between gap-[24px] mb-[16px] pb-[18px] border-b-1 border-gray-200"
                variants={itemVariants}
              >
                <div className="w-full">
                  <EcosystemItem
                    rei={false}
                    text="Income stops when deals stop"
                  />
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-between gap-[24px] mb-[16px] pb-[18px] border-b-1 border-gray-200"
                variants={itemVariants}
              >
                <div className="w-full">
                  <EcosystemItem
                    rei={false}
                    text="No vision beyond short-term gains"
                  />
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-between gap-[24px]"
                variants={itemVariants}
              >
                <div className="w-full">
                  <EcosystemItem
                    rei={false}
                    text="No retirement plan or exit strategy"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="absolute overflow-visible top-[-10%] right-[15%] w-[1500px] h-[1000px] z-[-1] bg-gradient-soft-purple pointer-events-none"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: {
            opacity: 0.4,
            scale: 1,
            transition: { duration: 2, ease: "easeOut", delay: 1 },
          },
        }}
      />
      <motion.div
        className="absolute overflow-visible top-[30%] right-[-15%] w-[1500px] h-[1000px] z-[-1] bg-gradient-soft-pink pointer-events-none"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: {
            opacity: 0.4,
            scale: 1,
            transition: { duration: 2, ease: "easeOut", delay: 1 },
          },
        }}
      />
      <p className="sr-only">
        Compare the advantages of being an REI Institute Certified Realtor
        versus traditional agents, focusing on wealth building, investment
        knowledge, and client success.
      </p>
    </motion.section>
  );
}
